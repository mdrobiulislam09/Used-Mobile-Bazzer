import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='m-5'>
            <h2 className='size'>1. What are the different ways to manage a state in a React application?</h2>
            <p className='paragraph'>Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose? In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.</p>
            <br></br>

            <h2 className='size'>2. How does prototypical inheritance work?</h2>
            <p className='paragraph'>When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.</p>
            <br></br>

            <h2 className='size'>3. What is a unit test? Why should we write unit tests?</h2>
            <p className='paragraph'>In unit testing, independent software module are tested separately. System testing is done to check whether the software or product meets the specified requirements or not.
            <br></br>
            For Test-Driven Development (TDD), you write unit tests before writing any implementation. This makes your implementation details in your code shorter and easier to understand. In this instance, the best time to write unit tests is immediately. For others, most developers write unit tests after the code's been written 
            </p>
            <br></br>

            <h2 className='size'>4. React vs. Angular vs. Vue?</h2>
            <p className='paragraph'>React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.They can be used almost interchangeably to build front-end applications, but they are not 100 percent the same, so it makes sense to compare them and understand their differences.</p>
        </div>
    );
};

export default Blog;