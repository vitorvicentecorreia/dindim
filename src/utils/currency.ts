export enum currencys {
	Real = "real",
}

const currencyFormatted = (format: currencys, value: number): string => {
	switch (format) {
		case currencys.Real:
			return `R$ ${value.toFixed(2)}`;
		default:
			return `${value}`;
	}
};

export default currencyFormatted;
