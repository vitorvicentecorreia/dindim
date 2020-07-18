import React from "react";
import { useHistory } from "react-router-dom";
import Balance from "../../components/Balance";
import RoundButton from "../../components/RoundButton";
import TransactionList from "../../components/TransactionList";
import {
	TransactionSchema,
	TransactionTypes,
} from "../../interfaces/Transaction";

const HomePage: React.FC = () => {
	const history = useHistory();

	const transactions: Array<TransactionSchema> = [
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
				clickAction={() => history.push("/new-transaction")}
				color="red"
				textButton="+"
			/>
		</div>
	);
};

export default HomePage;
