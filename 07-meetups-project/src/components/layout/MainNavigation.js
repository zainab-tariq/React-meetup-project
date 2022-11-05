import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css'
import {useContext} from 'react'
import FavoritesContext from '../../store/favorites-context';
function MainNavigation() {
    const favoriteCtx = useContext(FavoritesContext);
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetup</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">Add New Meetups</Link>
                    </li>
                    <li>
                        <Link to="/favorites">My favorites
                        <span className={classes.badge}>{favoriteCtx.totalfavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>

        </header>
    );

}
export default MainNavigation;