import './styles.scss';
import DataTable from 'react-data-table-component';
import React, { useState } from 'react';
import { ReactComponent as ArrowDown } from './../../assets/svg/arrow down.svg';

const LeaderBoard = () => {
    const [selectedTab, setTab] = useState('allBet');
    const columns = [
        {
            name: 'Blockchain',
            selector: 'blockchain',
            sortable: false,
        },
        {
            name: 'ID',
            selector: 'id_val',
            sortable: false,
        },
        {
            name: 'Time',
            selector: 'time',
            sortable: false,
        },
        {
            name: 'Wager',
            selector: 'wage',
            sortable: false,
        },
        {
            name: 'Profit',
            selector: 'profit',
            sortable: false,
            cell: (d) => {
                return (
                    <div className='flexed'>
                        {d.profit}
                        <ArrowDown
                            className={
                                'arrow ' + (d.margin === '+' ? 'red' : 'green')
                            }
                        />
                    </div>
                );
            },
        },
    ];

    const data = [
        {
            blockchain: 'Ethereuem',
            id: 1,
            id_val: '.....0324',
            time: '7:30 PM',
            wage: '0.72 ETH',
            profit: '+ 0.72 ETH',
            margin: '+',
        },
        {
            blockchain: 'Chainlink',
            id: 2,
            id_val: '.....0324',
            time: '7:30 PM',
            wage: '3.32 ETH',
            profit: '- 3.32 ETH',
            margin: '-',
        },
        {
            blockchain: 'Ethereuem',
            id: 3,
            id_val: '.....0324',
            time: '7:30 PM',
            wage: '0.72 ETH',
            profit: '+ 0.72 ETH',
            margin: '+',
        },
        {
            blockchain: 'Chainlink',
            id: 4,
            id_val: '.....0324',
            time: '7:30 PM',
            wage: '3.32 ETH',
            profit: '- 3.32 ETH',
            margin: '-',
        },
        {
            blockchain: 'Ethereuem',
            id: 5,
            id_val: '.....0324',
            time: '7:30 PM',
            wage: '0.72 ETH',
            profit: '+ 0.72 ETH',
            margin: '+',
        },
        {
            blockchain: 'Chainlink',
            id: 6,
            id_val: '.....0324',
            time: '7:30 PM',
            wage: '3.32 ETH',
            profit: '- 3.32 ETH',
            margin: '-',
        },
        {
            blockchain: 'Ethereuem',
            id: 7,
            id_val: '.....0324',
            time: '7:30 PM',
            wage: '0.72 ETH',
            profit: '+ 0.72 ETH',
            margin: '+',
        },
        {
            blockchain: 'Chainlink',
            id: 8,
            id_val: '.....0324',
            time: '7:30 PM',
            wage: '3.32 ETH',
            profit: '- 3.32 ETH',
            margin: '-',
        },
        {
            blockchain: 'Ethereuem',
            id: 9,
            id_val: '.....0324',
            time: '7:30 PM',
            wage: '0.72 ETH',
            profit: '+ 0.72 ETH',
            margin: '+',
        },
    ];

    return (
        <div className='leader_board_dt_wrap content_box'>
            <div className='tabs'>
                <div
                    onClick={() => setTab('myBet')}
                    className={
                        'item' + (selectedTab === 'myBet' ? ' active' : '')
                    }>
                    My Bets
                </div>
                <div
                    onClick={() => setTab('allBet')}
                    className={
                        'item' + (selectedTab === 'allBet' ? ' active' : '')
                    }>
                    All Bets
                </div>
                <div
                    onClick={() => setTab('bigBet')}
                    className={
                        'item' + (selectedTab === 'bigBet' ? ' active' : '')
                    }>
                    Big Bets
                </div>
            </div>
            <DataTable title='' columns={columns} data={data} noHeader={true} />
        </div>
    );
};

export default React.memo(LeaderBoard);
