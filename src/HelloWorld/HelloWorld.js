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

function getGreeting(user) {
    if (user)
        return <h1>Hello, {formatName(user)}!</h1>;
    return <h1>Hello, Stranger.</h1>;
}

function HelloWorld() {
    // return getGreeting(user);
    return getGreeting();
}
export default HelloWorld;