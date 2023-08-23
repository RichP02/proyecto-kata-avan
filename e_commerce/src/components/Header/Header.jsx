import './header.css';

const Header = () => {
    return (
        <div className='header__container'>
            <input className='header__input-search' type='search' placeholder='Search a product...'/>

            <div className='header__li-container'>
                <ul>
                    <li>
                        <a className='header__li' href="">Home</a>
                    </li>
                    <li>
                        <a className='header__li' href="">Sign Up</a>
                    </li>
                    <li>
                        <a className='header__li' href="">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
