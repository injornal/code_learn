import { Link } from 'react-router';

export default function HelloWorld () {
    return <div>
        <h1>Hello World!</h1>
        <Link to="/login">Login</Link>
    </div>
}