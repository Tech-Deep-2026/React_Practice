import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../Components/Header.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../utils/appStore.js";
import '@testing-library/jest-dom';


it("should render header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const btn = screen.getByRole("button",{name:"Login"});
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    const btn2 = screen.getByRole("button",{name:"Logout"});
    expect(btn2).toBeInTheDocument();

});