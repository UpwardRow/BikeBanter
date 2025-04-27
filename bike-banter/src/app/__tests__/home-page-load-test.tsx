import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home Page', () => {
  it('renders the logo', () => {
    render(<Home />)

    // Check if the taskbar has loaded
    const taskbar = screen.getByRole('navigation');
    expect(taskbar).toBeInTheDocument();

    // Check if the logo is in the document
    const logo = screen.getByAltText(/Bike Banter logo/i);
    expect(logo).toBeInTheDocument();

    // Check if map has loaded
    const journeyMap = screen.getByAltText(/Journey Map/i);
    expect(journeyMap).toBeInTheDocument();

    // Check if packing list has loaded
    const packingList = screen.getByText(/Packing List/i);
    expect(packingList).toBeInTheDocument();

    // Check if user's bike has loaded
    const userBike = screen.getByText(/User's Bike/i);
    expect(userBike).toBeInTheDocument();

    // Check if journey suggestions have loaded
    const journeySuggestions = screen.getByText(/Journey Suggestions/i);
    expect(journeySuggestions).toBeInTheDocument();

    // Check if journey duratoion has loaded
    const journeyDuration = screen.getByText(/Journey Duration/i);
    expect(journeyDuration).toBeInTheDocument();

    // Check if taskbar quick links have loaded
    const taskbarQuickLinks = screen.getByText(/Taskbar Quick Links/i);
    expect(taskbarQuickLinks).toBeInTheDocument();

    // Check if search bar has loaded
    const searchBar = screen.getByPlaceholderText(/Search/i);
    expect(searchBar).toBeInTheDocument();

    // Check if sidebar has loaded
    const sidebar = screen.getByText(/Sidebar/i);
    expect(sidebar).toBeInTheDocument();

  });
});
