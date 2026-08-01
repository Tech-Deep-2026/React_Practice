import { render, screen } from "@testing-library/react";
import Contact from "../Components/Contact"
import '@testing-library/jest-dom'

test("Should have the heading text",()=>{
    
    render(<Contact/>);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})