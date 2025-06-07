import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Account from '../page'

describe('Account Page', () => {
  it('Checks for correct load of home page elements', () => {
    render(<Account />)

    // Check if the navbar has loaded
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();

    // Check if navbar back suggestions have loaded
    const navbarBack = screen.getByText(/Navbar Back/i);
    expect(navbarBack).toBeInTheDocument();

    // Check if user's details has loaded
    const userDetails = screen.getByText(/User's Details/i);
    expect(userDetails).toBeInTheDocument();

    // Check if journey suggestions have loaded
    const usersPicture = screen.getByText(/User's Picture/i);
    expect(usersPicture).toBeInTheDocument();

  });
});
