import React from "react";
import Transaction from "../Transaction";
import { TransactionListProps } from "../../interfaces/TransactionList";

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
	return (
		<div>
			{transactions &&
				transactions.map((transaction, index) => (
					<Transaction key={index} {...transaction} />
				))}
		</div>
	);
};

export default TransactionList;
