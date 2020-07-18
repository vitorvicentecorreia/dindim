import React, { useState } from "react";
import { RightArrow } from "../../components/Arrow";
import {
	KeyboardDateTimePicker,
	MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { TransactionFormProps } from "../../interfaces/TransactionForm";

export const placeholderOfInputs = {
	description: "Descrição da transação",
	value: "Valor da transação",
};

export const formError = "As informações estão incorretas ou invalidas.";
export const submitButtonTitle = "Botão para enviar uma nova transação";

export const categoriesOfTransaction = ["Compras", "Salario"];
export const transactionTypes = ["income", "expense"];

const TransactionForm: React.FC<TransactionFormProps> = (props) => {
	const [error, setError] = useState(false);
	const [description, setDescription] = useState("");
	const [value, setValue] = useState("");
	const [dateOfTransaction, setDateOfTransaction] = useState(new Date());
	const [category, setCategory] = useState("");
	const [transactionType, setTransactionType] = useState("");

	const setDate = (date: any) => setDateOfTransaction(date);

	const handleFormSubmit = () => {
		const formDataIsValid = () => {
			const formData = [
				description,
				value,
				dateOfTransaction,
				category,
				transactionType,
			];

			return formData.every((data) => data);
		};

		if (!formDataIsValid()) {
			setError(true);
			return;
		}
		setError(false);
		const transactionPayload = {
			description,
			value: parseInt(value),
			dateOfTransaction,
			category,
			transactionType,
		};

		return props.submitAction(transactionPayload);
	};

	return (
		<form>
			<input
				type="text"
				placeholder={placeholderOfInputs.description}
				value={description}
				onChange={(event) => setDescription(event.target.value)}
			/>
			<input
				type="number"
				placeholder={placeholderOfInputs.value}
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<KeyboardDateTimePicker
					value={dateOfTransaction}
					onChange={setDate}
					onError={() => {}}
					minDate={new Date("2018-01-01T00:00")}
					format="dd/MM/yyyy HH:mm"
					ampm={false}
				/>
			</MuiPickersUtilsProvider>

			<select
				data-testid="select-category"
				onChange={(event) => setCategory(event.target.value)}
			>
				{categoriesOfTransaction.map((category, index) => (
					<option key={index} value={category}>
						{category}
					</option>
				))}
			</select>

			<select
				data-testid="select-transaction-type"
				onChange={(event) => setTransactionType(event.target.value)}
			>
				{transactionTypes.map((type, index) => (
					<option key={index} value={type}>
						{type}
					</option>
				))}
			</select>

			<div onClick={() => handleFormSubmit()}>
				<RightArrow title={submitButtonTitle} />
			</div>
			{error && <div>{formError}</div>}
		</form>
	);
};

export default TransactionForm;
