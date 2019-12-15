import React from 'react';
// import React from 'react':
// 'React' must be in scope when using JSX  react/react-in-jsx-scope
// Search for the keywords to learn more about each error.

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'John',
    lastName: 'Doe'
};
const place = 'World';

function HelloWorld() {
    const elementName = (
        <h1>
            Hello, { formatName(user) }!!!
        </h1>
    );
    // const elementPlace = <h2>Hello, { place }!!!</h2>;

    // It will generate an error:
    // Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
    // const elementName = (
    //     <h1>
    //         Hello, { name }!!!
    //     </h1>
    //     <h1>
    //         Hello, { name }!!!
    //     </h1>
    // );
    // However, this will be ok:
    // const elementName = (
    //     <div>
    //         <h1>
    //             Hello, { name }!!!
    //         </h1>
    //         <h1>
    //             Hello, { name }!!!
    //         </h1>
    //     </div>
    // );

    // Returns the last
    // return elementName && elementPlace;

    // Returns [object Object][object Object]
    // return elementName + elementPlace;

    // Returns object
    console.log('%o, %o', typeof elementName, elementName);
    // return typeof elementName;

    // Returns the object React
    return elementName;
}
export default HelloWorld;