import './styles.scss';
import github from './../../assets/images/github.png';
import telegram from './../../assets/images/telegram.png';
import twitter from './../../assets/images/twitter.png';

const Footer = () => {
    return (
        <footer>
            <div className='item'>© 2021 All Right Reserved.</div>
            <div className='item'>Terms of Service</div>
            <div className='item'>Versus Whitepaper Documentation</div>
            <div className='item'>
                <img src={telegram} alt='telegram' />
                <img src={twitter} alt='twitter' />
                <img src={github} alt='github' />
            </div>
        </footer>
    );
};

export default Footer;
