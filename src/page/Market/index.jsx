import './styles.scss';
import { Link } from 'react-router-dom';
import LeaderBoard from './../../component/LeaderBoard';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import TradeValues from './TradeValues';
import Prediction from './Prediction';
import Timer from './Timer';
import { CloseRoundPop } from './PopUps';

import dataSet from './demoDataSet';
import diamond from './../../assets/images/diamond.png';

const chartOptions = {
    fill: {
        colors: ['#F03B3B', '#0CC63B'],
    },
    colors: ['#F03B3B', '#0CC63B'],
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
    }, [chartDataState, cryptoSelected]);

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
                data={dataSet[cryptoSelected]}
                tabSelected={tabSelected}
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
                        <div
                            className='wallet'
                            data-aos='fade-left'
                            data-aos-duration='500'
                            data-aos-offset='0'>
                            Wallet:....501c2307
                        </div>
                        <div
                            className='tab_wrap'
                            data-aos='fade-up'
                            data-aos-duration='500'
                            data-aos-offset='0'>
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
                        <p
                            className='content_intel_color'
                            data-aos='fade-right'
                            data-aos-duration='500'
                            data-aos-offset='0'>
                            Amount pooled in this 2-hour cycle
                        </p>
                    </div>
                    <div className='content_box_wrap'>
                        <div
                            className='left_wrap'
                            data-aos='fade-up'
                            data-aos-duration='700'
                            data-aos-offset='0'>
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
                        <div
                            className='right_wrap'
                            data-aos='fade-up'
                            data-aos-duration='800'
                            data-aos-offset='0'>
                            <Prediction
                                data={dataSet[cryptoSelected]}
                                tabSelected={tabSelected}
                            />
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
                    <p
                        className='content_intel_color'
                        data-aos='fade-right'
                        data-aos-duration='500'
                        data-aos-offset='0'>
                        Price feeds provided by Chainlink
                    </p>
                </div>
                <div className='container flexed_cont'>
                    <div
                        className='left_wrap'
                        data-aos='fade-up'
                        data-aos-duration='700'
                        data-aos-offset='0'>
                        <TradeValues data={dataSet[cryptoSelected]} />
                    </div>
                    <div
                        className='right_wrap'
                        data-aos='fade-up'
                        data-aos-duration='800'
                        data-aos-offset='0'>
                        <LeaderBoard />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Market;
