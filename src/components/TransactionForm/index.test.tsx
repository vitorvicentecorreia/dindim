import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionForm, {
	placeholderOfInputs,
	categoriesOfTransaction,
	transactionTypes,
	formError,
} from "./index";
import DefaultProvider from "../../providers/DefaultProvider";
import { defaultFormat } from "../../utils/date";
import { formatISO } from "date-fns";

const renderForm = (props = {}) => {
	const defaultProps = {
		submitAction: jest.fn,
	};

	render(
		<DefaultProvider>
			<TransactionForm {...defaultProps} {...props} />
		</DefaultProvider>
	);
};

test(`Dado que o usuário abriu o Form,
	  e não há nenhum erro,
	  o formulário deverá ser renderizado.`, () => {
	renderForm();
	const currentDate = defaultFormat(new Date());
	const valuesOnScreen = [
		categoriesOfTransaction[0],
		transactionTypes[0],
		currentDate,
	];

	Object.values(placeholderOfInputs).forEach((placeholder) =>
		expect(screen.getByPlaceholderText(placeholder)).toBeVisible()
	);
	valuesOnScreen.forEach((value) => screen.getByDisplayValue(value));
	expect(screen.getByTitle("Icone de seta pra direita")).toBeInTheDocument();
});

test(`Dado que o usuário clicou no botão de enviar,
	  e as informações não estão completas ou invalidas,
	  a ação passada por prop não deverá ser chamada`, () => {
	const submitActionMockError = jest.fn();
	renderForm();

	userEvent.click(screen.getByTitle("Icone de seta pra direita"));
	expect(submitActionMockError).not.toHaveBeenCalled();
	expect(screen.getByText(formError)).toBeVisible();
});

test(`Dado que o usuário clicou no botão de enviar,
	  e as informações estão preenchidas e corretas,
	  a ação passada por prop deverá ser chamada com as informações dos inputs`, () => {
	const submitActionMock = jest.fn();
	renderForm({ submitAction: submitActionMock });

	userEvent.type(
		screen.getByPlaceholderText(placeholderOfInputs.description),
		"Compra no mercado"
	);
	userEvent.type(
		screen.getByPlaceholderText(placeholderOfInputs.value),
		"20000"
	);
	userEvent.selectOptions(
		screen.getByTestId("select-category"),
		screen.getByText(categoriesOfTransaction[0])
	);
	userEvent.selectOptions(
		screen.getByTestId("select-transaction-type"),
		screen.getByText(transactionTypes[1])
	);
	userEvent.click(screen.getByTitle("Icone de seta pra direita"));

	expect(submitActionMock).toBeCalledTimes(1);
});
