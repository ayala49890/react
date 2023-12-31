import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import React from 'react';
import Header from './Header';

export default  function Entery ()  {

    return (
        <div>
            <h1>welcome!</h1>
            <Link to="login">
                <Button> התחברות </Button>
            </Link>
            <Link to="/signup">
                <Button >הרשמה </Button>
            </Link>
        </div>
    );
}
