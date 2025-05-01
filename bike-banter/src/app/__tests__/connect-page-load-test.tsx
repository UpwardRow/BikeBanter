import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Connect from '../page'

describe('Connect Page', () => {
  it('Checks for correct load of home page elements', () => {
    render(<Connect />)

    // Check if the taskbar has loaded
    const taskbar = screen.getByRole('navigation');
    expect(taskbar).toBeInTheDocument();

    // Check if the logo is in the document
    const logo = screen.getByAltText(/Bike Banter logo/i);
    expect(logo).toBeInTheDocument();

    // Check if taskbar quick links have loaded
    const taskbarQuickLinks = screen.getByText(/Taskbar Quick Links/i);
    expect(taskbarQuickLinks).toBeInTheDocument();

    // Check if Adam's piece has loaded
    const adamsPiece = screen.getByAltText(/Adam's Piece/i);
    expect(adamsPiece).toBeInTheDocument();

    // Check if Adam's picture has loaded
    const adamsPicture = screen.getByText(/Adam's Picture/i);
    expect(adamsPicture).toBeInTheDocument();

    // Check if flat list container has loaded
    const flatListContainer = screen.getByText(/Flat List Container/i);
    expect(flatListContainer).toBeInTheDocument();

    // Check if search bar has loaded
    const searchBar = screen.getByPlaceholderText(/Search/i);
    expect(searchBar).toBeInTheDocument();

    // Check if sidebar has loaded
    const sidebar = screen.getByText(/Sidebar/i);
    expect(sidebar).toBeInTheDocument();

  });
});
