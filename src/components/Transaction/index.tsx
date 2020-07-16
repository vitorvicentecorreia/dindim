import React, { useMemo, memo } from "react";
import { TransactionProps } from "../../interfaces/Transaction";
import currencyFormatted, { currencys } from "../../utils/currency";
import { defaultFormat } from "../../utils/date";

const Transaction: React.FC<TransactionProps> = ({
	category,
	datetime,
	value,
	description,
}) => {
	const formattedDate = useMemo(() => defaultFormat(datetime), [datetime]);

	const formattedValue = useMemo(
		() => currencyFormatted(currencys.Real, value),
		[value]
	);

	return (
		<div>
			<div>{category}</div>
			<div>{formattedDate}</div>
			<div>{description}</div>
			<div>{formattedValue}</div>
		</div>
	);
};

export default memo(Transaction);
