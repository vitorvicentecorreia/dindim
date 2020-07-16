import React, { memo } from "react";
import { RoundButtonProps } from "../../interfaces/RoundButton";

const RoundButton: React.FC<RoundButtonProps> = ({
	textButton,
	color,
	clickAction,
	disabled = false,
}) => {
	const handleClickAction = () => !disabled && clickAction();

	return <button onClick={() => handleClickAction()}>{textButton}</button>;
};

export default memo(RoundButton);
