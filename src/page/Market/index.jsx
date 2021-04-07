import './styles.scss';
import { Link } from 'react-router-dom';
import LeaderBoard from './../../component/LeaderBoard';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

import diamond from './../../assets/images/diamond.png';

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
                                        <div>ETH/USD</div>
                                        <div>$1334.82</div>
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
                            <div className='content_box'>BOX HERE</div>
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
