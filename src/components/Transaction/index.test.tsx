import React from "react";
import { render } from "@testing-library/react";
import { TransactionProps } from "../../interfaces/Transaction";
import DefaultProvider from "../../providers/DefaultProvider";
import Transaction from "./index";

const renderTransaction = (props: Partial<TransactionProps> = {}) => {
	const defaultProps: TransactionProps = {
		category: "mercado",
		datetime: new Date("2020-05-13T12:00:00"),
		title: "Compra do mês",
		value: 500.5,
	};

	return render(
		<DefaultProvider>
			<Transaction {...defaultProps} {...props} />
		</DefaultProvider>
	);
};

test("should render and format data passed by props", () => {
	const { getByText } = renderTransaction();

	const category = getByText("mercado");
	const datetime = getByText("13/05/2020 12:00");
	const title = getByText("Compra do mês");
	const value = getByText("R$ 500.50");

	expect(category).toBeTruthy();
	expect(datetime).toBeTruthy();
	expect(title).toBeTruthy();
	expect(value).toBeTruthy();
});
