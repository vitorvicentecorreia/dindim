import React from "react";

interface Arrow {
	title: string;
	rotate?: number;
}

export const DownArrow: React.FC<Arrow> = ({ title, rotate = 0 }) => (
	<svg
		style={{ transform: `rotate(${rotate}deg)` }}
		width="24"
		height="24"
		xmlns="http://www.w3.org/2000/svg"
		fillRule="evenodd"
		clipRule="evenodd"
	>
		<title>{title}</title>
		<path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
	</svg>
);

export const LeftArrow: React.FC<Arrow> = ({ title }) => (
	<DownArrow title={title} rotate={90} />
);
export const TopArrow: React.FC<Arrow> = ({ title }) => (
	<DownArrow title={title} rotate={180} />
);
export const RightArrow: React.FC<Arrow> = ({ title }) => (
	<DownArrow title={title} rotate={270} />
);
