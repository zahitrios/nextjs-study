import { useEffect } from 'react'

function About (){

    useEffect (() => {
        alert ('page loaded');
    }, []);

    return (
        <div>
            <header>This is the about page2</header>
            <button onClick={() => {alert("here");}}>Click me</button>
        </div>
    );
}

export default About;