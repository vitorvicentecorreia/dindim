export enum TransactionTypes {
	Expense = "expense",
	Recipe = "recipe",
	Transfer = "transfer",
}

export interface TransactionProps {
	description: string;
	value: number;
	category: string;
	datetime: Date;
	type: TransactionTypes;
}
