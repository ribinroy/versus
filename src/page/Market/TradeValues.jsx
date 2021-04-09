import Value from './PercentValue';

const TradeValues = ({ data }) => {
    return (
        <div className='trade_wrap content_box'>
            <div className='header'>
                <div className='crypto'>{data.title} Price</div>
                <div className='value'>
                    ${data.price}
                    <div className='crypto_value'>{data.btcValue}</div>
                </div>
            </div>
            <div className='body'>
                <div className='item'>
                    <div className='key'>24h Price Change</div>
                    <div className='value'>
                        {data.tradeData['24hrPC'].price}
                        <Value
                            value={data.tradeData['24hrPC'].profit}
                            margin={data.tradeData['24hrPC'].margin}
                        />
                    </div>
                </div>
                <div className='item'>
                    <div className='key'>Market Cap</div>
                    <div className='value'>
                        {data.tradeData['marketCap'].price}

                        <Value
                            value={data.tradeData['marketCap'].profit}
                            margin={data.tradeData['marketCap'].margin}
                        />
                    </div>
                </div>
                <div className='item'>
                    <div className='key'>24h Low / 24h High</div>
                    <div className='value'>
                        {data.tradeData['24hLow24hHigh'].price}
                    </div>
                </div>
                <div className='item'>
                    <div className='key'>Trading Volume</div>
                    <div className='value'>
                        {data.tradeData['tradingVol'].price}
                        <Value
                            value={data.tradeData['tradingVol'].profit}
                            margin={data.tradeData['tradingVol'].margin}
                        />
                    </div>
                </div>
                <div className='item'>
                    <div className='key'>
                        All Time Low <div className='sub'>Oct. 21, 2015</div>
                    </div>
                    <div className='value'>
                        {data.tradeData['allTimeLow'].price}{' '}
                        <Value
                            value={data.tradeData['allTimeLow'].profit}
                            margin={data.tradeData['allTimeLow'].margin}
                        />
                    </div>
                </div>
                <div className='item'>
                    <div className='key'>
                        All Time High<div className='sub'>Feb. 08, 2021</div>
                    </div>
                    <div className='value'>
                        {data.tradeData['allTimeHigh'].price}
                        <Value
                            value={data.tradeData['allTimeHigh'].profit}
                            margin={data.tradeData['allTimeHigh'].margin}
                        />
                    </div>
                </div>
                <div className='item'>
                    <div className='key'>Ethereum ROI</div>
                    <div className='value'>
                        <Value
                            value={data.tradeData['ROI'].profit}
                            margin={data.tradeData['ROI'].margin}
                        />
                    </div>
                </div>
                <div className='item'>
                    <div className='key'>CoinMarketCap Rank</div>
                    <div className='value'>#{data.tradeData['rank']}</div>
                </div>
            </div>
        </div>
    );
};

export default TradeValues;
