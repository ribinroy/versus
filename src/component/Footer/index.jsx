import './styles.scss';
import github from './../../assets/images/github.png';
import telegram from './../../assets/images/telegram.png';
import twitter from './../../assets/images/twitter.png';

const Footer = () => {
    return (
        <footer>
            <div
                className='item'
                data-aos='fade-up'
                data-aos-duration='500'
                data-aos-offset='0'>
                © 2021 All Right Reserved.
            </div>
            <div
                className='item'
                data-aos='fade-up'
                data-aos-duration='600'
                data-aos-offset='0'>
                Terms of Service
            </div>
            <div
                className='item'
                data-aos='fade-up'
                data-aos-duration='700'
                data-aos-offset='0'>
                Versus Whitepaper Documentation
            </div>
            <div
                className='item'
                data-aos='fade-up'
                data-aos-duration='800'
                data-aos-offset='0'>
                <img src={telegram} alt='telegram' />
                <img src={twitter} alt='twitter' />
                <img src={github} alt='github' />
            </div>
        </footer>
    );
};

export default Footer;
