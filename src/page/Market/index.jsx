import './styles.scss';
import { Link } from 'react-router-dom';
import LeaderBoard from './../../component/LeaderBoard';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

import diamond from './../../assets/images/diamond.png';
import etheruem from './../../assets/images/etheruem.png';
import { ReactComponent as Chevron } from './../../assets/svg/Chevron.svg';
import { ReactComponent as ArrowDown } from './../../assets/svg/arrow down.svg';

const chartOptions = {
    fill: {
        colors: ['#0CC63B', '#F03B3B'],
    },
    colors: ['#0CC63B', '#F03B3B'],
    legend: {
        show: false,
    },
    plotOptions: {
        bar: {
            distributed: true,
        },
    },
    chart: {
        id: 'apexchart-example',
        toolbar: {
            show: false,
        },
    },
    xaxis: {
        categories: ['Short', 'Long'],
    },
    labels: ['Short', 'Long'],
};

const chartDataSet = {
    eth: [
        {
            name: 'ETH',
            data: ['10 ETH', '40 ETH'],
        },
    ],
    link: [
        {
            name: 'ETH',
            data: ['32 ETH', '20 ETH'],
        },
    ],
};

const Market = () => {
    const [tabSelected, setTab] = useState('ethereum');
    const [cryptoSelected, setCrypto] = useState('eth');
    const [rewardToolTip, setRewardToolTip] = useState(false);
    // const [chartData, setChartData] = useState(chartDataSet['eth']);

    useEffect(() => {}, [tabSelected]);

    useEffect(() => {
        // setChartData(chartDataSet[cryptoSelected]);
    }, [cryptoSelected]);

    return (
        <main className='main_page market_wrap' tabselected={tabSelected}>
            <header>
                <div className='container'>
                    <div className='item home_link'>
                        <Link
                            to='/'
                            data-aos='fade-down'
                            data-aos-duration='500'
                            data-aos-offset='0'>
                            <img src={diamond} alt='Diamond' />
                        </Link>
                    </div>
                    <div
                        className='item counter'
                        data-aos='fade-down'
                        data-aos-duration='600'
                        data-aos-offset='0'>
                        Next prediction cycle ends in <span>02:00:00</span>
                    </div>
                    <div
                        className='item links_inside'
                        data-aos='fade-down'
                        data-aos-duration='700'
                        data-aos-offset='0'>
                        <div className='link'>Close Round</div>
                        <div
                            className='link'
                            onClick={() => setRewardToolTip(!rewardToolTip)}>
                            Claim Versus Tokens
                            <div
                                className={
                                    'tooltip' + (rewardToolTip ? ' active' : '')
                                }>
                                Congrats on the round! You’ve been rewarded 27
                                Versus Tokens
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className='charts_wrap'>
                <div className='container'>
                    <div className='top_contents_wrap'>
                        <div className='wallet'>Wallet:....501c2307</div>
                        <div className='tab_wrap'>
                            <button
                                className={
                                    'tab' +
                                    (tabSelected === 'ethereum'
                                        ? ' active'
                                        : '')
                                }
                                onClick={() => setTab('ethereum')}>
                                Ethereum
                            </button>
                            <button
                                className={
                                    'tab' +
                                    (tabSelected === 'BSC' ? ' active' : '')
                                }
                                onClick={() => setTab('BSC')}>
                                Binance Smart Chain
                            </button>
                        </div>
                        <p className='content_intel_color'>
                            Amount pooled in this 2-hour cycle
                        </p>
                    </div>
                    <div className='content_box_wrap'>
                        <div className='left_wrap'>
                            <div className='content_box'>
                                <div className='top_details'>
                                    <div className='left_wrap_1'>
                                        <div className='crypto_type'>
                                            <img src={etheruem} alt='ICON' />{' '}
                                            ETH/USD
                                        </div>
                                        <div className='value'>$1334.82</div>
                                    </div>
                                    <div className='right_wrap_1'>
                                        Target price : $1335
                                    </div>
                                </div>
                                <div className='chart_wrap'>
                                    <Chart
                                        options={chartOptions}
                                        series={chartDataSet[cryptoSelected]}
                                        type='bar'
                                        height={320}
                                    />
                                </div>
                            </div>

                            <div className='buttons_wrap'>
                                <button
                                    className={
                                        cryptoSelected === 'eth'
                                            ? ' active'
                                            : ''
                                    }
                                    onClick={() => setCrypto('eth')}>
                                    ETH / USD
                                </button>
                                <button
                                    className={
                                        cryptoSelected === 'link'
                                            ? ' active'
                                            : ''
                                    }
                                    onClick={() => setCrypto('link')}>
                                    LINK / USD
                                </button>
                            </div>
                        </div>
                        <div className='right_wrap'>
                            <Prediction />
                        </div>
                    </div>
                </div>
            </section>
            <section className='data_table_wrap'>
                <div className='container'>
                    <p className='content_intel_color'>
                        Price feeds provided by Chainlink
                    </p>
                </div>
                <div className='container flexed_cont'>
                    <div className='left_wrap'>
                        <TradeValues />
                    </div>
                    <div className='right_wrap'>
                        <LeaderBoard />
                    </div>
                </div>
            </section>
        </main>
    );
};

const Prediction = () => {
    const [selectedTab, setTab] = useState('Short');

    return (
        <div className='prediction_wrap content_box'>
            <div className='header'>
                Etherum Prediction <Chevron />
            </div>
            <div className='tab_wrap'>
                <div
                    onClick={() => setTab('Short')}
                    className={
                        'tab' + (selectedTab === 'Short' ? ' active' : '')
                    }>
                    Short
                </div>
                <div
                    onClick={() => setTab('Long')}
                    className={
                        'tab' + (selectedTab === 'Long' ? ' active' : '')
                    }>
                    Long
                </div>
            </div>
            <div className='body'>
                <div className='flexed'>
                    <div>Ethereum Short Below</div>
                    <div className='text_box'>$0.00</div>
                </div>
                <button>Review Prediction</button>
            </div>
            <div className='footer'>
                <div>ETH in my Wallet</div>
                <div>17.201 ETH = ($18,200 USD)</div>
            </div>
        </div>
    );
};

const TradeValues = () => {
    return (
        <div className='trade_wrap content_box'>
            <div className='header'>
                <div className='crypto'>Ethereum Price</div>
                <div className='value'>
                    $1,334.82
                    <div className='crypto_value'>0.03830 BTC</div>
                </div>
            </div>
            <div className='body'>
                <div className='item'>
                    <div className='key'>24h Price Change</div>
                    <div className='value'>
                        $129.06
                        <Value value='7.31%' margin='+' />
                    </div>
                </div>
                <div className='item'>
                    <div className='key'>Market Cap</div>
                    <div className='value'>$195,167,193,427.34</div>
                </div>
                <div className='item'>
                    <div className='key'>24h Low / 24h High</div>
                    <div className='value'>$1571.58 / $1,770.59</div>
                </div>
                <div className='item'>
                    <div className='key'>Trading Volume</div>
                    <div className='value'>$45,483,057,917.02</div>
                </div>
                <div className='item'>
                    <div className='key'>
                        All Time Low <div className='sub'>Oct. 21, 2015</div>
                    </div>
                    <div className='value'>
                        $1,770.06 <Value value='3.81%' margin='-' />
                    </div>
                </div>
                <div className='item'>
                    <div className='key'>
                        All Time High<div className='sub'>Feb. 08, 2021</div>
                    </div>
                    <div className='value'>XXXXX</div>
                </div>
                <div className='item'>
                    <div className='key'>Ethereum ROI</div>
                    <div className='value'>XXXXX</div>
                </div>
                <div className='item'>
                    <div className='key'>CoinMarketCap Rank</div>
                    <div className='value'>XXXXX</div>
                </div>
            </div>
        </div>
    );
};

const Value = ({ value, margin }) => {
    return (
        <div className={'value_wrap ' + (margin === '+' ? 'green' : 'red')}>
            <ArrowDown />
            {value}
        </div>
    );
};
export default Market;
