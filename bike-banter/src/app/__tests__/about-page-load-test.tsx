import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import About from '../page'

describe('About Page', () => {
  it('Checks for correct load of home page elements', () => {
    render(<About />)

    // Check if the navbar has loaded
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();

    // Check if navbar back suggestions have loaded
    const navbarBack = screen.getByText(/Navbar Back/i);
    expect(navbarBack).toBeInTheDocument();
    
    // Check if Adam's piece has loaded
    const adamsPiece = screen.getByAltText(/Adam's Piece/i);
    expect(adamsPiece).toBeInTheDocument();

    // Check if Adam's picture has loaded
    const adamsPicture = screen.getByText(/Adam's Picture/i);
    expect(adamsPicture).toBeInTheDocument();

    // Check if Adam's bike has loaded
    const adamsBike = screen.getByText(/Adam's Bike/i);
    expect(adamsBike).toBeInTheDocument();

  });
});
