import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DefaultProvider from "../../providers/DefaultProvider";
import RoundButton from "./index";
import { RoundButtonProps } from "../../interfaces/RoundButton";

const mockFunc = jest.fn();

const createRoundButton = (props: Partial<RoundButtonProps> = {}) => {
	const defaultProps: RoundButtonProps = {
		clickAction: () => mockFunc(),
		color: "red",
		textButton: "+",
		disabled: false,
	};

	return render(
		<DefaultProvider>
			<RoundButton {...defaultProps} {...props} />
		</DefaultProvider>
	);
};

test("emit action passed by prop", () => {
	const { getByText } = createRoundButton();
	fireEvent.click(getByText("+"));
	expect(mockFunc).toHaveBeenCalledWith();
});

test("if disabled true, not emit action passed by prop", () => {
	const disabledMockFunc = jest.fn();
	const { getByText } = createRoundButton({
		disabled: true,
		clickAction: () => disabledMockFunc,
	});
	fireEvent.click(getByText("+"));
	expect(disabledMockFunc).toHaveBeenCalledTimes(0);
});
