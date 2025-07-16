import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Account from '../components/pages/home/page'

describe('Account Page', () => {
  it('Checks for correct load of home page elements', () => {
    render(<Account />)

    // Check if the navbar has loaded
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();

    // Check if navbar back suggestions have loaded
    const navbarBack = screen.getByText(/Navbar Back/i);
    expect(navbarBack).toBeInTheDocument();

    // Check if Settings Container has loaded
    const settingsContainer = screen.getByText(/Settings Container/i);
    expect(settingsContainer).toBeInTheDocument();

  });
});
