import React, { memo } from "react";
import Transaction from "../Transaction";
import { TransactionListProps } from "../../interfaces/TransactionList";

export const noTransactionMessage = "Não possui transações salvas";

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
	if (!transactions) return <div>Não possui transações salvas</div>;

	return (
		<>
			{transactions.map((transaction, index) => (
				<Transaction key={index} {...transaction} />
			))}
		</>
	);
};

export default memo(TransactionList);
