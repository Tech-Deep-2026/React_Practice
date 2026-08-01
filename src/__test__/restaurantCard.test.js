import { render, screen } from "@testing-library/react"
import RestaurantCard from "../Components/RestaurantCard"
import restaurantData from '../mocks/resCardMock.json'
import '@testing-library/jest-dom'

it("Should render a card",()=>{

    render(<RestaurantCard resData={restaurantData}/>)

     const name = screen.getByText("Barbeque Nation");
     expect(name).toBeInTheDocument();
});