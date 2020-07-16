import React from "react";
import { render, screen } from "@testing-library/react";
import DefaultProvider from "../../providers/DefaultProvider";
import Balance from "./index";
import { BalanceProps } from "../../interfaces/Balance";

const balanceMock: BalanceProps = {
	balance: 1000.5,
};

test(`Dado que o usuário abre o Balance,
	  e possui um balanço válido,
	  ele deve ser aparecer na tela`, () => {
	render(
		<DefaultProvider>
			<Balance {...balanceMock} />
		</DefaultProvider>
	);

	expect(screen.getByText("R$ 1000.50")).toBeVisible();
});
