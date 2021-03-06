import React from 'react';
// import React from 'react':
// 'React' must be in scope when using JSX  react/react-in-jsx-scope
// Search for the keywords to learn more about each error.
import logo from '../img/react-logo.svg';


const user = {
    firstName: 'John',
    lastName: 'Doe',
    avatarUrl: logo
};

const greetingsUser = React.createElement(
    'div', {},
    [
        React.createElement(
            'h1', {
                className: 'hello-user'
            },
            'Hello, ' + formatName(user) + '!'
        ),
        React.createElement(
            'img', {
                src: user.avatarUrl
            }
        )
    ]
);

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    if (user)
        return greetingsUser;
    return <h1 class="hello-stranger">Hello, Stranger.</h1>;
}

export default function HelloWorld() {
    return getGreeting(user);
    // return getGreeting();
}
