import { useState, useContext } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import VersusContext from './../../store/Context';

import { ReactComponent as ArrowDark } from './../../assets/svg/arrowDark.svg';

const CloseRoundPop = ({ open, onClose, data, tabSelected }) => {
    const contextData = useContext(VersusContext);

    return (
        <Popup
            onClose={onClose}
            open={open}
            position='right center'
            className='flex_pop'
            closeOnDocumentClick>
            <div
                className='review_prediction_pop pop_content_wrap'
                tabSelected={tabSelected}>
                <div className='header'>
                    <img src={data.image} alt='ICOn' />
                    {data.title}
                </div>
                <div className='status'>
                    You’ve gone
                    <span>
                        {contextData.currentPrediction[data.title]
                            ? contextData.currentPrediction[data.title]
                            : 'N/A'}
                    </span>
                    this round.
                </div>
                <div className='body'>
                    <p>Finalize your ETH prediction for this round</p>
                    <div className='value'>
                        2.68 <span>ETH</span>
                    </div>
                </div>
                <div className='footer'>
                    <button onClick={onClose}>Close Round</button>
                    <div className='contents'>
                        <div>Not finished?</div>
                        <div className='link' onClick={onClose}>
                            Submit another prediction this round <ArrowDark />
                        </div>
                    </div>
                </div>
            </div>
        </Popup>
    );
};

const ReviewPredictionPop = ({ open, onClose, data, tabSelected }) => {
    const contextData = useContext(VersusContext);
    const [selectedTab, setTab] = useState('Short');

    const submitPrediction = () => {
        const currentData = contextData.currentPrediction;
        currentData[data.title] = selectedTab;
        contextData.setCurrentPrediction(currentData);
        onClose();
    };
    return (
        <Popup
            onClose={onClose}
            open={open}
            position='right center'
            className='flex_pop'
            closeOnDocumentClick>
            <div
                className='review_prediction_pop pop_content_wrap'
                tabSelected={tabSelected}>
                <div className='header'>
                    <img src={data.image} alt='ICOn' />
                    {data.title}
                </div>
                <div className='tabs_wrap'>
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
                    <p>Review your ETH amount to stake</p>
                    <input
                        type='number'
                        name='value'
                        id='value'
                        className='value'
                        defaultValue='0.00'
                    />
                </div>
                <div className='footer'>
                    <button onClick={() => submitPrediction()}>
                        Submit Prediction
                    </button>
                    <div className='contents'>
                        <div>ETH balance</div>
                        <div>17.201 ETH = $18,200 USD</div>
                    </div>
                </div>
            </div>
        </Popup>
    );
};

export { ReviewPredictionPop, CloseRoundPop };
