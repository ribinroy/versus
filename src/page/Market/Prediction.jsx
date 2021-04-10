import { ReactComponent as Chevron } from './../../assets/svg/Chevron.svg';
import { useState } from 'react';
import { ReviewPredictionPop } from './PopUps';

const Prediction = ({ data, tabSelected }) => {
    const [selectedTab, setTab] = useState('Short');
    const [showReviewPredictionPop, setReviewPredictionPop] = useState(false);

    return (
        <div className='prediction_wrap content_box'>
            <ReviewPredictionPop
                open={showReviewPredictionPop}
                onClose={() => setReviewPredictionPop(false)}
                data={data}
                tabSelected={tabSelected}
            />
            <div className='header'>
                {data.title} Prediction <Chevron />
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
                    <div>{data.title} Short Below</div>
                    <div className='text_box'>$0.00</div>
                </div>
                <button onClick={() => setReviewPredictionPop(true)}>
                    Review Prediction
                </button>
            </div>
            <div className='footer'>
                <div>ETH in my Wallet</div>
                <div>17.201 ETH = ($18,200 USD)</div>
            </div>
        </div>
    );
};

export default Prediction;
