const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors())
app.use(express.json())

// console.log(process.env.M_PASS)
//////////////////////
app.get('/', (req, res) => {
    res.send('Sportz Car server is Running')
})



const {
    MongoClient,
    ServerApiVersion,
    ObjectId
} = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.6g3butq.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

//JWT Token verification
const verifyjwt = (req, res, next) => {
    console.log("Hitting verify JWT Token");
    console.log(req.headers.authorization)
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).send({
            error: true,
            message: "Unauthorized Access"
        })
    }
    const token = authorization.split(' ')[1];
    console.log("Inside the token", token)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                error: true,
                message: "Unauthorized Access"
            })
        }
        req.decoded = decoded;
        next();
    })

}

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        client.connect();
        const SportzcarCollection = client.db('SportzCarDB').collection('cartoys')

        //All Toys Shows
        /////////////////////////
        // app.get('/alltoys', async (req, res) => {
        //     const cursor = SportzcarCollection.find();
        //     const result = await cursor.toArray();
        //     res.send(result);

        // })
        ///////////////////
        app.get('/alltoys', async (req, res) => {
            const page = parseInt(req.query.page) || 1; // Get the requested page number
            const limit = 20; // Number of items per page
          
            console.log(`Requested page: ${page}`);
          
            const skip = (page - 1) * limit; // Calculate the number of items to skip
            console.log(`Items to skip: ${skip}`);
          
            const cursor = SportzcarCollection.find().skip(skip).limit(limit); // Apply pagination
            const result = await cursor.toArray();
          
            console.log(`Fetched items: ${result.length}`);
          
            res.send(result);
          });
          
          
          


        //without pagination
        // app.get('/alltoys', async (req, res) => {
        //     const limit = parseInt(req.query.limit) || 20; // Default limit is 20, can be overridden with query parameter
        //     const cursor = SportzcarCollection.find().limit(limit);
        //     const result = await cursor.toArray();
        //     res.send(result);
        //   });
        //With pagination
        // app.get('/alltoys', async (req, res) => {
        //     const limit = parseInt(req.query.limit) || 5;
        //     const page = parseInt(req.query.page) || 1;
        //     const skip = (page - 1) * limit;

        //     try {
        //       const totalCount = await SportzcarCollection.countDocuments();
        //       const cursor = SportzcarCollection.find().skip(skip).limit(limit);
        //       const result = await cursor.toArray();
        //       res.send({ totalCount, result });
        //     } catch (error) {
        //       console.error('Error fetching toys:', error);
        //       res.status(500).send('Internal Server Error');
        //     }
        //   });



        //JWT TOKEN SERVICE
        app.post('/jwt', async (req, res) => {
            const user = req.headers;
            console.log(user);
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '1h'
            })
            res.send({
                token
            });

        })
        //find some specific data using query
        // app.get('/mytoys', verifyjwt, async (req, res) => {
        //     const decoded = req.decoded;
        //     console.log(decoded.email)
        //     console.log("After cameback", decoded)
        //     if(decoded.email !== req.query.email){
        //       return res.status(403).send({error:1, message:"For bidden Access"})
        //     }
        //     console.log(req.query)
        //     console.log(req.headers)
        //     let query = {}
        //     if (req.query.semail) {
        //         query = {
        //             semail: req.query.semail
        //         }
        //     }
        //     // console.log(req.query.email)
        //     // const query={};
        //     // if(req.query?.email){
        //     //   query={email:req.query.email}
        //     // }
        //     const result = await SportzcarCollection.find(query).toArray();
        //     res.send(result)
        // })
        //////////////////////
        app.get('/mytoys', verifyjwt, async (req, res) => {
            const decoded = req.decoded;
            console.log(decoded.email)
            console.log("After cameback", decoded)
            if (decoded.email !== req.query.email) {
                return res.status(403).send({
                    error: 1,
                    message: "Forbidden Access"
                });
            }

            let query = {};

            if (req.query.semail) {
                query = {
                    semail: req.query.semail
                };
            }

            let sortQuery = {};

            if (req.query.sort === 'asc') {
                sortQuery = {
                    price: 1
                };
            } else if (req.query.sort === 'desc') {
                sortQuery = {
                    price: -1
                };
            }

            const result = await SportzcarCollection.find(query).sort(sortQuery).toArray();
            res.send(result);
        });

        //delete
        app.delete('/toy/:id', async (req, res) => {
            const id = req.params.id
            const query = {
                _id: new ObjectId(id)
            };
            const result = await SportzcarCollection.deleteOne(query);
            res.send(result)


        })
        ////short  product depend on price

        //Add Toy
        app.post('/addtoy', async (req, res) => {
            const addtoy = req.body;
            const result = await SportzcarCollection.insertOne(addtoy);
            res.send(result);

        })
        //find specific toy
        app.get('/toy/:id', async (req, res) => {
            const id = req.params.id
            const query = {
                _id: new ObjectId(id)
            };
            const result = await SportzcarCollection.findOne(query);
            res.send(result)


        })
        //get in update page info
        app.get('/update/:id', async (req, res) => {
            const id = req.params.id
            const query = {
                _id: new ObjectId(id)
            };
            const result = await SportzcarCollection.findOne(query);
            res.send(result)


        })
        //update data
        app.patch('/update/:id', async (req, res) => {
            const id = req.params.id;
            const filter = {
                _id: new ObjectId(id)
            };
            const updateToy = req.body;
            console.log(updateToy);
            const updateDoc = {
                $set: {
                    tphoto: updateToy.tphoto,
                    scategory: updateToy.scategory,
                    price: updateToy.price,
                    ratting: updateToy.ratting,
                    quantity: updateToy.quantity,
                    description: updateToy.description,
                },
            };
            const result = await SportzcarCollection.updateOne(filter, updateDoc);
            res.send(result);
        });


        // Send a ping to confirm a successful connection
        await client.db("admin").command({
            ping: 1
        });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Sportz Car Running on port ${port}`)

})