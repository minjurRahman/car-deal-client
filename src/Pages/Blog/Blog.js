import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 m-20 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">1. What are the different ways to manage a state in a React application? </summary>
                    <div className="px-4 pb-4">
                        <p>There are four main types of state you need to properly manage in your React apps <br />
                        Local (UI) state – <br /> Local state is data we manage in one or another component. <br />
                        Global (UI) state – <br /> Global state is data we manage across multiple components. <br />
                        Server state – <br /> Data that comes from an external server that must be integrated with our UI state. <br />
                        URL state – <br /> Data that exists on our URLs, including the pathname and query parameters.
                        </p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">2. How does prototypical inheritance work?</summary>
                    <div className="px-4 pb-4">
                        <p>Prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied. <br />
                        JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.
                         </p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">3. What is a unit test? Why should we write unit tests?</summary>
                    <div className="px-4 pb-4 space-y-2">
                        <p>Unit Testing: <br /> Unit Testing is a type of software testing where individual units or components of a software are tested. <br />
                        To verify the correctness of the code. <br />
                        To test every function and procedure. <br />
                        To fix bugs early in the development cycle and to save costs. <br />
                        To help the developers to understand the code base and enable them to make changes quickly.
                        </p>

                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">4. React vs. Angular vs. Vue?</summary>
                    <div className="px-4 pb-4 space-y-2">
                        <p>React: <br /> React is recommended for projects with front-end-heavy results. Since there are no clear structures, close cooperation between the development team is vital. React has a stronger server-side rendering support, making the library more SEO-friendly. <br />
                        Angular: <br /> Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications. <br />
                        Vue: <br /> Vue may be used for a wide range of applications. It may give a great solution for virtually every project type due to its interoperability with other JavaScript frameworks and its ability to add more complicated logic to current programs.
                        </p>

                    </div>
                </details>
            </div>
        </div>
    </section>
    );
};

export default Blog;