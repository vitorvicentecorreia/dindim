import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
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

test(`Dado que o usuário clicou no botão,
	  e ele está habilitado,
	  a função passada a ele deverá ser acionada.`, () => {
	createRoundButton();
	fireEvent.click(screen.getByText("+"));
	expect(mockFunc).toHaveBeenCalled();
});

test(`Dado que o usuário clicou no botão,
	  e ele está desabilitado,
	  a função passada a ele não deverá ser acionada`, () => {
	const disabledMockFunc = jest.fn();
	createRoundButton({
		disabled: true,
		clickAction: () => disabledMockFunc(),
	});
	fireEvent.click(screen.getByText("+"));
	expect(disabledMockFunc).toHaveBeenCalledTimes(0);
});
