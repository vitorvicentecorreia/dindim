import React from "react";
import { useHistory } from "react-router-dom";
import TransactionForm from "../../components/TransactionForm";
import { LeftArrow } from "../../components/Arrow";
import { TransactionSchema } from "../../interfaces/Transaction";

export const goBackButtonText = "Botão para voltar para página anterior";

const NewTransaction: React.FC = () => {
	const history = useHistory();

	const sendNewTranstaction = (transaction: TransactionSchema) => {
		console.log(transaction);
	};
	return (
		<div>
			<div onClick={() => history.goBack()}>
				<LeftArrow title={goBackButtonText} />
			</div>
			<TransactionForm submitAction={sendNewTranstaction} />
		</div>
	);
};

export default NewTransaction;
