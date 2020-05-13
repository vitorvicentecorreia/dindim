import React from "react";
import { render } from "@testing-library/react";
import DefaultProvider from "../../providers/DefaultProvider";
import Balance from "./index";
import { BalanceProps } from "../../interfaces/Balance";

const renderBalance = (props: Partial<BalanceProps> = {}) => {
	const defaultProps: BalanceProps = {
		balance: 1000.5,
	};

	return render(
		<DefaultProvider>
			<Balance {...defaultProps} {...props} />
		</DefaultProvider>
	);
};

test("should render the balance passed per prop", () => {
	const { getByText } = renderBalance();
	const balance = getByText("R$ 1000.50");

	expect(balance).toBeTruthy();
});
