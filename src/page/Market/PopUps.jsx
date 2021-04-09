// import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const CloseRoundPop = ({ open, onClose }) => {
    return (
        <Popup
            onClose={onClose}
            open={open}
            className='qr_pop_up '
            position='right center'
            closeOnDocumentClick>
            <div className='close_round_pop_wrap'>TEST</div>
        </Popup>
    );
};

const ReviewPredictionPop = ({ open, onClose }) => {
    return (
        <Popup
            onClose={onClose}
            open={open}
            className='qr_pop_up '
            position='right center'
            closeOnDocumentClick>
            <div className='review_prediction_pop flex_pop'>
                <div className='header'>Etherum</div>
                <div className='tabs_wrap'>
                    <div className='tab'>Short</div>
                    <div className='tab'>Long</div>
                </div>
                <div className='body'></div>
            </div>
        </Popup>
    );
};

export { ReviewPredictionPop, CloseRoundPop };
