import React from "react";
import Balance from "../../components/Balance";
import TransactionList from "../../components/TransactionList";
import {
	TransactionProps,
	TransactionTypes,
} from "../../interfaces/Transaction";

const HomePage: React.FC = () => {
	const transactions: Array<TransactionProps> = [
		{
			category: "mercado",
			datetime: new Date(),
			title: "compra do mês",
			value: 500,
			type: TransactionTypes.Recipe,
		},
		{
			category: "padaria",
			datetime: new Date(),
			title: "pão",
			value: 10,
			type: TransactionTypes.Recipe,
		},
	];

	return (
		<div>
			<Balance balance={1000.5} />
			<TransactionList transactions={transactions} />
		</div>
	);
};

export default HomePage;
