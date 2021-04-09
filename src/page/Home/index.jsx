import './styles.scss';
import LeaderBoard from './../../component/LeaderBoard';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState } from 'react';

import globeImage from './../../assets/images/globe.png';
import diamond from './../../assets/images/diamond.png';
import QRCode from './../../assets/images/QRCode.jpg';
import WalletConnect from './../../assets/images/walletConnect.png';
import HIW1 from './../../assets/images/HIW.png';
import HIW2 from './../../assets/images/HIW 1.png';
import HIW3 from './../../assets/images/HIW 2.png';
import WV1 from './../../assets/images/Why Versus (1).png';
import WV2 from './../../assets/images/Why Versus (2).png';
import WV3 from './../../assets/images/Why Versus (3).png';
import WV4 from './../../assets/images/Why Versus (4).png';
import { ReactComponent as ArrowDown } from './../../assets/svg/arrow down.svg';
import { ReactComponent as Cancel } from './../../assets/svg/cancel.svg';

const Home = () => {
    const [openCWPop, setCWPop] = useState(false);
    return (
        <div className='main_wrap home_wrap'>
            <Popup
                onClose={() => setCWPop(false)}
                open={openCWPop}
                className='qr_pop_up '
                position='right center'
                closeOnDocumentClick>
                <div className='qr_code_wrap'>
                    <div className='out_the_box_wrap'>
                        <img src={WalletConnect} alt='' />
                        <Cancel onClick={() => setCWPop(false)} />
                    </div>
                    <p>Scan QR code with a WalletConnect-compatible wallet</p>
                    <img src={QRCode} alt='QR Code' />
                    <p>Copy to clipboard</p>
                </div>
            </Popup>
            <section className='globe_wrap'>
                <img
                    src={globeImage}
                    alt='main globe'
                    data-aos='zoom-in'
                    data-aos-duration='3000'
                    data-aos-offset='0'
                />
                <div className='container'>
                    <div className='top_bar'>
                        <div className='item'>
                            <img
                                src={diamond}
                                alt='Diamond'
                                data-aos='fade-down'
                                data-aos-duration='500'
                                data-aos-offset='0'
                            />
                        </div>
                        <div
                            className='item'
                            data-aos='fade-down'
                            data-aos-duration='600'
                            data-aos-offset='0'>
                            <div>Total Wagered:</div>
                            <div>$11,200 USD</div>
                        </div>
                        <div
                            data-aos='fade-down'
                            data-aos-duration='700'
                            data-aos-offset='0'
                            className='item clickable'
                            onClick={() => setCWPop(true)}>
                            Connect Wallet
                        </div>
                    </div>
                    <div
                        className='left_content'
                        data-aos='fade-left'
                        data-aos-duration='800'
                        data-aos-offset='0'>
                        The web’s simplest price prediction platform for
                        cryptocurrency
                    </div>
                    <div
                        className='main_text'
                        data-aos='fade-up'
                        data-aos-duration='900'
                        data-aos-offset='0'>
                        Price Prediction. Simplified.
                    </div>
                    <Link
                        to='/market'
                        className='view_market_button'
                        data-aos='fade-up'
                        data-aos-duration='1600'
                        data-aos-offset='0'>
                        <button>View the markets</button>
                    </Link>
                    <div className='left_links_wraps'>
                        <a
                            href='#howItWorks'
                            className='link'
                            data-aos='fade-left'
                            data-aos-duration='1000'
                            data-aos-offset='0'>
                            How It Works
                        </a>
                        <a
                            href='#whyVersus'
                            className='link'
                            data-aos='fade-left'
                            data-aos-duration='1100'
                            data-aos-offset='0'>
                            Why Versus?
                        </a>
                        <a
                            href='#leaderboards'
                            className='link'
                            data-aos='fade-left'
                            data-aos-duration='1200'
                            data-aos-offset='0'>
                            Leaderboards
                        </a>
                    </div>
                    <a
                        href='#howItWorks'
                        className='scroll_down_button'
                        data-aos='fade-up'
                        data-aos-duration='1500'
                        data-aos-offset='0'>
                        <div className='arrow'>
                            <ArrowDown />
                        </div>
                        <div className='text'>What is Versus?</div>
                    </a>
                </div>
            </section>
            <section className='how_it_works' id='howItWorks'>
                <div className='container'>
                    <h1
                        data-aos='fade-left'
                        data-aos-duration='500'
                        data-aos-offset='0'>
                        How It Works
                    </h1>
                    <div className='flexed_contents'>
                        <div
                            className='item'
                            data-aos='fade-up'
                            data-aos-duration='600'
                            data-aos-offset='0'>
                            <img src={HIW1} alt='HIW1' />
                            <p>
                                Make hourly predictions on the prices of
                                different markets and generate Versus for making
                                correct predictions. All Decentralized. No KYC
                                required.
                            </p>
                        </div>
                        <div
                            className='item'
                            data-aos='fade-up'
                            data-aos-duration='700'
                            data-aos-offset='0'>
                            <img src={HIW2} alt='HIW2' />
                            <p>
                                Earn profits by longing or shorting specific
                                markets like ETH/USD and beat the market.
                            </p>
                        </div>
                        <div
                            className='item'
                            data-aos='fade-up'
                            data-aos-duration='800'
                            data-aos-offset='0'>
                            <img src={HIW3} alt='HIW3' />
                            <p>
                                Claim fees by helping to manage the expiration
                                of contracts. When a market's timer runs out, be
                                the first to expire it and earn free tokens.
                            </p>
                        </div>
                    </div>
                    <p
                        data-aos='fade-up'
                        data-aos-duration='900'
                        data-aos-offset='0'>
                        Versus token holders get rewarded with ETH for just
                        holding the Versus tokens in their wallet.
                    </p>
                </div>
            </section>
            <section className='why_versus' id='whyVersus'>
                <div className='container'>
                    <h1
                        data-aos='fade-left'
                        data-aos-duration='500'
                        data-aos-offset='0'>
                        Why Versus?
                    </h1>
                    <div className='flexed_contents'>
                        <div
                            className='item'
                            data-aos='fade-up'
                            data-aos-duration='600'
                            data-aos-offset='0'>
                            <img src={WV1} alt='WV1' />
                            <p>1. Compatible with multiple chains </p>
                            <p>
                                Although Ethereum is Versus' main chain, the
                                platform is also compatible with Binance's Smart
                                Chain. This allows users to use a chain that has
                                much less gas fees than the traditional
                                expensive Ethereum network.
                            </p>
                        </div>
                        <div
                            className='item'
                            data-aos='fade-up'
                            data-aos-duration='700'
                            data-aos-offset='0'>
                            <img src={WV2} alt='WV2' />
                            <p>2. Two hour prediction windows</p>
                            <p>
                                Due to Versus' two hour prediction window, users
                                will be able to make multiple predictions every
                                two hours. This gives each user a chance to win
                                multiple times each day.
                            </p>
                        </div>
                        <div
                            className='item'
                            data-aos='fade-up'
                            data-aos-duration='800'
                            data-aos-offset='0'>
                            <img src={WV3} alt='WV3' />
                            <p>4. Users get paid for managing markets</p>
                            <p>
                                Users can keep an eye on when each market's two
                                hour window expires and race to be the first to
                                close the prediction period. The first to
                                confirm gets paid. This helps Versus operate
                                without the need for any centralized moderators.
                            </p>
                        </div>
                        <div
                            className='item'
                            data-aos='fade-up'
                            data-aos-duration='900'
                            data-aos-offset='0'>
                            <img src={WV4} alt='WV4' />
                            <p>3. No user gets left behind</p>
                            <p>
                                Whether a user wins or loses a prediction, they
                                are rewarded with Versus tokens.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='leaderboards' id='leaderboards'>
                <div className='container'>
                    <h1
                        data-aos='fade-up'
                        data-aos-duration='500'
                        data-aos-offset='0'>
                        Versus Leaderboards
                    </h1>
                    <p
                        data-aos='fade-up'
                        data-aos-duration='600'
                        data-aos-offset='0'>
                        Every 2 hours, our leaderboards update you on all
                        current bets happening, as well as keeping you up to
                        date on your transaction history
                    </p>
                    <div
                        className='dt_wrap'
                        data-aos='fade-up'
                        data-aos-duration='700'
                        data-aos-offset='0'>
                        <LeaderBoard />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
