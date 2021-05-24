import React from 'react';
import { render, screen } from '@src/test/test-utils';
import userEvent from '@testing-library/user-event';
import Homepage from '@pages/homepage';

describe('Homepage', () => {
	it('should render to screen', () => {
		const { container } = render(<Homepage />);
		const headElement = screen.getByRole('heading', { name: /nextnotes/i });
		const allheadElement = screen.getAllByRole('heading', {
			name: /nextnotes/i,
		});
		expect(headElement).toBeInTheDocument;
		expect(container.firstChild).toHaveTextContent(`NextNotes`);
		expect(allheadElement).toHaveLength(1);
	});
	it('Should render login button and click', () => {
		render(<Homepage />);
		const loginBtn = screen.getByRole('button', { name: /login/i });
		expect(loginBtn).toBeInTheDocument();
		userEvent.click(loginBtn);
        expect(/login form/i)
	});
	it('Should render Sign up button and click', () => {
		render(<Homepage />);
		const signUpBtn = screen.getByRole('button', { name: /sign up/i });
		expect(signUpBtn).toBeInTheDocument();
		userEvent.click(signUpBtn);
	});
});
