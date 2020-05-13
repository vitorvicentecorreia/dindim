import React, { useMemo } from "react";
import { BalanceProps } from "../../interfaces/Balance";
import currencyFormatted, { currencys } from "../../utils/currency";

const Balance: React.FC<BalanceProps> = ({ balance }) => {
	const formattedBalance = useMemo(
		() => currencyFormatted(currencys.Real, balance),
		[balance]
	);

	return <div>{formattedBalance}</div>;
};

export default Balance;
