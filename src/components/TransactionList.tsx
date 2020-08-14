import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState"
import { Transaction } from "../components/Transaction"
import {transaction} from "../context/GlobalState"

export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transact:transaction) => {
                    return <Transaction key={transact.id} transaction={transact} />
                })}
            </ul>
        </>
    )
}