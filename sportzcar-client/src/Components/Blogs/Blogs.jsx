import React from 'react'
import './blogs.css'
import { useEffect } from 'react'

const Blogs = () => {
    useEffect(()=>{
        document.title="Sportz Car | Blogs"
      })
  return (
    <div className='blogs_1 text-2xl'>
        <h2 className='blog-title_1'>Blogs</h2>
        <div className='questions'>
            <h3 className='text-yellow-600 pb-2'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side? </h3>
            <p><span className='span'>An access token</span> is a piece of data that allows a client application to access protected resources on a server on behalf of a user. An access token has a limited lifetime and expires after a certain period of time.</p>
            <p><span className='span'>A refresh token</span>  is a special token that is used to obtain new access token pairs when the current access token expires.</p>
            <p><span className='span'>access tokens and refresh tokens work as follows:</span><ul>
                <li>→A client application requests an access token and a refresh token from an authorization server when a user logs in.</li>
                <li>→The authorization server issues an access token and a refresh token to the client application.</li>
                <li>→The client application uses the access token to access protected resources on a server on behalf of the user</li>
                <li>→The access token expires after a certain period of time</li>
                <li>→The client application uses the refresh token to obtain new access/refresh token pairs from the authorization server when the current access token expires</li>
                <li>→The refresh token can also be used to acquire extra access tokens for other resources</li>
                <li>→The refresh token has a longer lifetime than the access token and can be revoked at any time</li>
                </ul>  </p>
                <p><span className='span'>The best practice for storing access tokens and refresh tokens on the client-side:</span>  For single-page applications (SPAs), it is recommended to store the access token in memory and the refresh token in an HTTP-only cookie. Besides we can store it local storage . This is second best practice.</p>
        </div><br></br>
        <div className='questions'>
            <h3 className='text-yellow-600 pb-2'>2. Compare SQL and NoSQL databases?</h3>
            <p><span className='span'>Here's a comparison between SQL and NoSQL databases:</span></p>
            <p><span className='span'>Structure:</span>  SQL databases are based on a structured data model where data is organized into tables with predefined schemas. Each table consists of rows (records) and columns (fields).

           On the otherhand NoSQL databases use a variety of data models, including key-value pairs, document-based, columnar, and graph-based. They are designed to be flexible and handle unstructured or semi-structured data.</p>
           <p><span className='span'>Scalability: </span>SQL databases can handle structured data efficiently and are suitable for complex queries and large datasets. They can scale vertically  or horizontally. On the other hand NoSQL databases are highly scalable and designed for distributed computing. They can scale horizontally by adding more servers to the database cluster, allowing for massive scalability and handling high volumes of data and traffic.</p>
            
        </div><br></br>
        <div className='questions'>
            <h3 className='text-yellow-600 pb-2'>3. What is express js? What is Nest JS?</h3>
            <p><span className='span'>Express.js</span> is a fast, minimalist, and flexible web application framework for Node.js. It provides a set of features and utilities to build web applications and APIs easily. Express.js is known for its simplicity, lightweight design, and unopinionated approach, allowing developers to have full control over the application's structure and implementation.</p>
            <p><span className='span'>Nest.JS</span> is a progressive and opinionated Node.js framework for building efficient and scalable server-side applications. It is designed to provide a robust structure and architecture for developing server-side applications using TypeScript. NestJS takes inspiration from Angular's architecture and applies it to the backend, promoting the concept of a modular, organized, and extensible codebase.</p>
            <p>Overall we can think of Node.js as the foundation and Express.js as one of the many tools that you can use on top of it. Node.js gives you the flexibility and power to write any kind of server-side application using JavaScript, while Express.js simplifies some common tasks and conventions for web development. You can use Node.js without Express.js, but you cannot use Express.js without Node.js</p>
            
        </div><br></br>
        <div className='questions'>
            <h3 className='text-yellow-600 pb-2'>4. What is MongoDB aggregate and how does it work? </h3>
            <p><span className='span'>MongoDB's aggregate</span>   framework is a powerful feature that allows you to perform advanced data analysis and manipulation operations on collections of documents within a MongoDB database. It provides a flexible way to retrieve, transform, and summarize data using a pipeline of stages.</p>
            <p><span className='span'> </span></p>
            <p><span className='span'>That's way MongoDB aggregation framework works:</span><ul>
                <li><span className='span'>Matching Stage: </span>The $match stage is used to filter documents based on specific criteria. It works similar to the find method and allows you to select only the documents that meet certain conditions.</li>
                <li><span className='span'>Projection Stage: </span>The $project stage allows you to reshape the documents and include or exclude specific fields. It can be used to rename fields, create new fields, or exclude existing fields from the output.</li>
                <li><span className='span'>Grouping Stage: </span>The $group stage is used to group documents together based on a specific field or set of fields. It enables you to perform various aggregation operations on the grouped data, such as calculating counts, sums, averages, or applying more complex expressions.</li>
                <li><span className='span'>Aggregation Operators: </span>MongoDB provides a wide range of aggregation operators that can be used within the $group stage or other stages. These operators include $sum, $avg, $min, $max, $push, $addToSet, $first, $last, and many more. They allow you to perform computations, array manipulations, and other operations on the grouped data.</li>
                <li><span className='span'>Sorting Stage: </span>The $sort stage is used to sort the resulting documents based on one or more</li>
                <li><span className='span'>Additional Stages: </span>MongoDB offers many other stages, such as $lookup (for performing joins), $unwind (to flatten arrays), $limit (to limit the number of documents), $skip (to skip a certain number of documents), and more. These stages can be used to further refine and shape the aggregation results.</li><br></br>
                <p><span className='span'> </span>By chaining these stages together in a specific order, you can build complex aggregation pipelines to transform and analyze your data. The result of the aggregation pipeline is typically returned as a cursor or an array of documents.</p>
                </ul>  </p>
        </div>
    </div>
  )
}

export default Blogs
