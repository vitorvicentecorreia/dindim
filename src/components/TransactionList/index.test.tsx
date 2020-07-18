import React from "react";
import { render, screen } from "@testing-library/react";
import DefaultProvider from "../../providers/DefaultProvider";
import TransactionList, { noTransactionMessage } from "./index";
import { TransactionTypes } from "../../interfaces/Transaction";
import { TransactionListProps } from "../../interfaces/TransactionList";

const transactionListMock: TransactionListProps = {
	transactions: [
		{
			category: "mercado",
			datetime: new Date("2020-05-13T12:00:00"),
			description: "Compra do mês",
			value: 500.5,
			type: TransactionTypes.Transfer,
		},
	],
};

test(`Dado que o usuário abre o componente de lista de transações,
	  e ele possui transações salvas,
	  o componente deve listar as transações.`, () => {
	render(
		<DefaultProvider>
			<TransactionList {...transactionListMock} />
		</DefaultProvider>
	);

	const textsOnScreen = ["Compra do mês", "R$ 500.50"];

	textsOnScreen.forEach((text) =>
		expect(screen.getByText(text)).toBeVisible()
	);
});

test(`Dado que o usuário abre o componente de lista de transações,
	  e ele não possui transações salvas,
	  o componente deve sinalizar que não possui transações.`, () => {
	render(
		<DefaultProvider>
			<TransactionList />
		</DefaultProvider>
	);

	expect(screen.getByRole("alert")).toHaveTextContent(noTransactionMessage);
});
