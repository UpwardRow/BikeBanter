import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Gear from '../gear/page'

describe('Gear Page', () => {
  it('Checks for correct load of gear page elements', () => {
    render(<Gear />)

    // Check if the navbar has loaded
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();

    // Check if the logo is in the document
    const logo = screen.getByAltText(/Bike Banter logo/i);
    expect(logo).toBeInTheDocument();

    // Check if navbar quick links have loaded
    const navbarQuickLinks = screen.getByText(/navbar Quick Links/i);
    expect(navbarQuickLinks).toBeInTheDocument();

    // Check if packing list has loaded
    const packingList = screen.getByText(/Packing List/i);
    expect(packingList).toBeInTheDocument();

    // Check if user's bike has loaded
    const userBike = screen.getByText(/User's Bike/i);
    expect(userBike).toBeInTheDocument();

    // Check if bike components has loaded
    const bikeComponents = screen.getByText(/Bike Components/i);
    expect(bikeComponents).toBeInTheDocument();

    // Check if search bar has loaded
    const searchBar = screen.getByPlaceholderText(/Search/i);
    expect(searchBar).toBeInTheDocument();

    // Check if sidebar has loaded
    const sidebar = screen.getByText(/Sidebar/i);
    expect(sidebar).toBeInTheDocument();

  });
});
