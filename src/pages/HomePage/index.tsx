import React from "react";
import Balance from "../../components/Balance";
import RoundButton from "../../components/RoundButton";
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
			description: "compra do mês",
			value: 500,
			type: TransactionTypes.Recipe,
		},
		{
			category: "padaria",
			datetime: new Date(),
			description: "pão",
			value: 10,
			type: TransactionTypes.Recipe,
		},
	];

	return (
		<div>
			<Balance balance={1000.5} />
			<TransactionList transactions={transactions} />
			<RoundButton
				clickAction={() => console.log("oi")}
				color="red"
				textButton="+"
			/>
		</div>
	);
};

export default HomePage;
