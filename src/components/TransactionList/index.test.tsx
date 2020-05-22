import React from "react";
import { render } from "@testing-library/react";
import DefaultProvider from "../../providers/DefaultProvider";
import TransactionList from "./index";
import { TransactionTypes } from "../../interfaces/Transaction";
import { TransactionListProps } from "../../interfaces/TransactionList";

const renderTransactionList = (props: Partial<TransactionListProps> = {}) => {
	const defaultProps: TransactionListProps = {
		transactions: [
			{
				category: "mercado",
				datetime: new Date("2020-05-13T12:00:00"),
				title: "Compra do mês",
				value: 500.5,
				type: TransactionTypes.Transfer,
			},
		],
	};

	return render(
		<DefaultProvider>
			<TransactionList {...defaultProps} {...props} />
		</DefaultProvider>
	);
};

test("should render a list with transactions passed by prop", () => {
	const { getAllByTestId } = renderTransactionList();

	const transactions = getAllByTestId("transaction");
	expect(transactions).toHaveLength(1);
});
