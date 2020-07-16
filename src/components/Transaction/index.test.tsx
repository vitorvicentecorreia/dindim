import React from "react";
import { render, screen } from "@testing-library/react";
import {
	TransactionProps,
	TransactionTypes,
} from "../../interfaces/Transaction";
import DefaultProvider from "../../providers/DefaultProvider";
import Transaction from "./index";

const transactionMock: TransactionProps = {
	category: "mercado",
	datetime: new Date("2020-05-13T12:00:00"),
	description: "Compra do mês",
	value: 500.5,
	type: TransactionTypes.Expense,
};

test(`Dado que o usuário abra o componente de transação,
	  e os dados dessa transação estejam corretos,
	  as informações da transação devem aparecer na tela`, () => {
	render(
		<DefaultProvider>
			<Transaction {...transactionMock} />
		</DefaultProvider>
	);

	const textsOnScreen = [
		"mercado",
		"13/05/2020 12:00",
		"Compra do mês",
		"R$ 500.50",
	];

	textsOnScreen.forEach((text) => expect(screen.getByText(text)).toBeVisible);
});
