import './styles.scss';
import { Link } from 'react-router-dom';
import LeaderBoard from './../../component/LeaderBoard';

import diamond from './../../assets/images/diamond.png';

const Market = () => {
    return (
        <main className='main_page market_wrap'>
            <header>
                <div className='container'>
                    <div className='item home_link'>
                        <Link to='/'>
                            <img src={diamond} alt='Diamond' />
                        </Link>
                    </div>
                    <div className='item counter'>
                        Next prediction cycle ends in
                    </div>
                    <div className='item links_inside'>
                        <div className='link'>Close Round</div>
                        <div className='link'>Claim Versus Tokens</div>
                    </div>
                </div>
            </header>
            <section className='charts_wrap'>
                <div className='container'>
                    <div className='content_box_wrap'>
                        <div className='left_wrap'>
                            <div className='content_box'>CHART HERE</div>
                        </div>
                        <div className='right_wrap'>
                            <div className='content_box'>BOX HERE</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='data_table_wrap'>
                <div className='container'>
                    <div className='left_wrap'>
                        <div className='content_box'></div>
                    </div>
                    <div className='right_wrap'>
                        <LeaderBoard />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Market;
