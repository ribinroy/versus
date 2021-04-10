import etheruem from './../../assets/images/etheruem.png';
import chainlink from './../../assets/images/chainlink.png';

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

export default dataSet;
