import React, { useState } from 'react';

const VersusContext = React.createContext();

export default VersusContext;

export function Provider(props) {
    const [currentPrediction, setCurrentPrediction] = useState({});

    const contextData = {
        currentPrediction,
        setCurrentPrediction: (data) => {
            setCurrentPrediction(data);
        },
    };

    return (
        <VersusContext.Provider value={contextData}>
            {props.children}
        </VersusContext.Provider>
    );
}
