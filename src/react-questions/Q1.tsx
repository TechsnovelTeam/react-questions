// What's wrong with this code?
// How to fix the problem? Please note that removing components from the tree is not an option.

import React from 'react';

interface UserProps {
    name: string;
    email: string;
}

interface GrandChildProps {
    user: UserProps;
}

function GrandChildComponent({ user }: GrandChildProps) {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
}

interface ChildProps {
    user: UserProps;
}

function ChildComponent({ user }: ChildProps) {
    return (
        <div>
            <GrandChildComponent user={user} />
        </div>
    );
}

interface ParentProps {
    user: UserProps;
}

function ParentComponent({ user }: ParentProps) {
    return (
        <div>
            <ChildComponent user={user} />
        </div>
    );
}

export function ShowUser() {
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
    };

    return <ParentComponent user={user} />;
}
