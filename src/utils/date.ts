export function getDateTimeValues(date: Date) {
	const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
	const month =
		date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
	const year = date.getFullYear();
	const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
	const minute =
		date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

	return { day, month, year, hour, minute };
}

export function defaultFormat(date: Date): string {
	const { day, month, year, hour, minute } = getDateTimeValues(date);

	return `${day}/${month}/${year} ${hour}:${minute}`;
}

export function materialUiFormat(date: Date): string {
	const { day, month, year, hour, minute } = getDateTimeValues(date);

	return `${year}/${month}/${day} ${hour}:${minute}`;
}
