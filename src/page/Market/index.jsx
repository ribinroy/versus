import './styles.scss';
import { Link } from 'react-router-dom';
import LeaderBoard from './../../component/LeaderBoard';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import TradeValues from './TradeValues';
import Prediction from './Prediction';
import Timer from './Timer';
import { CloseRoundPop } from './PopUps';

import diamond from './../../assets/images/diamond.png';
import etheruem from './../../assets/images/etheruem.png';
import chainlink from './../../assets/images/chainlink.png';

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

const dataSet = {
    eth: {
        name: 'ETH/USD',
        title: 'Ethreruem',
        image: etheruem,
        price: '1334.82',
        btcValue: '0.03830 BTC',
        totalprice: '1335',
        tradeData: {
            pm: { profit: '7.32', margin: '+' },
            '24hrPC': { price: '$129.06', profit: '7.31', margin: '+' },
            marketCap: {
                price: '$195,167,193,427.34',
                profit: '7.31',
                margin: '+',
            },
            '24hLow24hHigh': { price: '$1571.58 / $1,770.59' },
            tradingVol: {
                price: '$45,483,057,917.02',
                profit: '16.97',
                margin: '+',
            },
            allTimeLow: { price: '$1,770.06', profit: '3.81', margin: '-' },
            allTimeHigh: { price: '$0.4209', profit: '404552.79', margin: '+' },
            ROI: { profit: '60024.21', margin: '+' },
            rank: '2',
        },
        chart: [
            {
                name: 'ETH',
                data: ['10 ETH', '40 ETH'],
            },
        ],
    },
    link: {
        name: 'Chainlink',
        title: 'Chainlink',
        image: chainlink,
        price: '22.61',
        btcValue: '0.00048 BTC',
        totalprice: '24.89',
        tradeData: {
            pm: { profit: '7.32', margin: '+' },
            '24hrPC': { price: '$2.33', profit: '7.68', margin: '+' },
            marketCap: {
                price: '$12,383,604,898.99',
                profit: '9.19',
                margin: '+',
            },
            '24hLow24hHigh': { price: '$26.83 / $30.64' },
            tradingVol: {
                price: '$3,098,066,260.96',
                profit: '25.78',
                margin: '+',
            },
            allTimeLow: { price: '$30.64', profit: '0.57', margin: '-' },
            allTimeHigh: { price: '$0.1263', profit: '24020.27', margin: '+' },
            ROI: { profit: '19366.09', margin: '+' },
            rank: '9',
        },
        chart: [
            {
                name: 'ETH',
                data: ['32 ETH', '20 ETH'],
            },
        ],
    },
};

const Market = () => {
    const [tabSelected, setTab] = useState('ethereum');
    const [cryptoSelected, setCrypto] = useState('eth');
    const [rewardToolTip, setRewardToolTip] = useState(false);
    const [showCloseRoundPop, setCloseRoundPop] = useState(false);
    const [chartDataState, setChartData] = useState(
        dataSet[cryptoSelected].chart
    );

    useEffect(() => {
        if (chartDataState[0].name === '')
            setChartData(dataSet[cryptoSelected].chart);
    }, [chartDataState]);

    const setTabHandler = (value) => {
        setTab(value);
        setChartData([
            {
                name: '',
                data: ['0 ETH', '0 ETH'],
            },
        ]);
    };

    useEffect(() => {
        setChartData(dataSet[cryptoSelected].chart);
    }, [cryptoSelected]);

    return (
        <main className='main_page market_wrap' tabselected={tabSelected}>
            <CloseRoundPop
                open={showCloseRoundPop}
                onClose={() => setCloseRoundPop(false)}
            />
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
                        Next prediction cycle ends in{' '}
                        <Timer timerValue={7200003} />
                    </div>
                    <div
                        className='item links_inside'
                        data-aos='fade-down'
                        data-aos-duration='700'
                        data-aos-offset='0'>
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
                                onClick={() => setTabHandler('ethereum')}>
                                Ethereum
                            </button>
                            <button
                                className={
                                    'tab' +
                                    (tabSelected === 'BSC' ? ' active' : '')
                                }
                                onClick={() => setTabHandler('BSC')}>
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
                                            <img
                                                src={
                                                    dataSet[cryptoSelected]
                                                        .image
                                                }
                                                alt='ICON'
                                            />
                                            {dataSet[cryptoSelected].name}
                                        </div>
                                        <div className='value'>
                                            ${dataSet[cryptoSelected].price}
                                        </div>
                                    </div>
                                    <div className='right_wrap_1'>
                                        Target price : $
                                        {dataSet[cryptoSelected].totalprice}
                                    </div>
                                </div>
                                <div className='chart_wrap'>
                                    <Chart
                                        options={chartOptions}
                                        series={chartDataState}
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
                            <Prediction data={dataSet[cryptoSelected]} />
                            <div
                                className='close_round_link'
                                onClick={() => setCloseRoundPop(true)}>
                                Close Round
                            </div>
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
                        <TradeValues data={dataSet[cryptoSelected]} />
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
