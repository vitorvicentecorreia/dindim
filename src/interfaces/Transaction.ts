export enum TransactionTypes {
	Expense = "expense",
	Recipe = "recipe",
	Transfer = "transfer",
}

export interface TransactionProps {
	title: string;
	value: number;
	category: string;
	datetime: Date;
	type: TransactionTypes;
}
