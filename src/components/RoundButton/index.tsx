import React from "react";
import { RoundButtonProps } from "../../interfaces/RoundButton";

const RoundButton: React.FC<RoundButtonProps> = ({
	textButton,
	color,
	clickAction,
	disabled,
}) => {
	const handleClickAction = () => {
		if (disabled) return;
		clickAction();
	};

	return <button onClick={() => handleClickAction()}>{textButton}</button>;
};

export default RoundButton;
