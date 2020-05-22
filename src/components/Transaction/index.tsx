import React, { useMemo } from "react";
import { TransactionProps } from "../../interfaces/Transaction";
import currencyFormatted, { currencys } from "../../utils/currency";
import { defaultFormat } from "../../utils/date";

const Transaction: React.FC<TransactionProps> = (props) => {
	const formattedDate = useMemo(() => defaultFormat(props.datetime), [
		props.datetime,
	]);

	const formattedValue = useMemo(
		() => currencyFormatted(currencys.Real, props.value),
		[props.value]
	);

	return (
		<div data-testid="transaction">
			<div>{props.category}</div>
			<div>{formattedDate}</div>
			<div>{props.title}</div>
			<div>{formattedValue}</div>
		</div>
	);
};

export default Transaction;
