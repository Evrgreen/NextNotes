import React from 'react';
import { cleanup, getByRole, render, screen, waitFor } from '@src/test/test-utils';
import { Navbar } from '@components/navbar';


afterEach(() =>cleanup());


describe('Navbar', () => {
    it('should render without crashing', () => {
        
    });
	it('should render logo to screen', () => {
		render(<Navbar />);
		const element = screen.getByText('NextNotes');

		expect(element).toBeInTheDocument();
	});
    it('should render a login button', () => {
        render(<Navbar />);
        const loginBtn = getByRole("button",/login/i)
        expect(loginBtn).toBeInTheDocument();
    });
    it('should notify user if they are not logged in', () => {
        
        render(<Navbar />);
        const element = screen.getByRole('')
    });
    it('should call the login function when login button is clicked', () => {
        
    });
    it('should should show logout button if user is logged in', () => {
        
    });

});
