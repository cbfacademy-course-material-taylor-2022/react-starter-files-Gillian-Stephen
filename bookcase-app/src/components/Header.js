import {Link} from 'react-router-dom';
import Header from './components/Header';

function Header() {
    return <>
    <h1>My Bookcase</h1>
    <Link to=" /bookcase" className="bookLink"> Bookcase</Link>
    </>
}