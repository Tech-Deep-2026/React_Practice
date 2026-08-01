const { render, act,screen } = require("@testing-library/react");
import Body from '../Components/Body';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom'

global.fetch = jest.fn(() =>{
    return Promise.resolve ({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("Should render body component with search", async () => {
    await act(async () => {
        render (
            <Body/>
        );
    });

    const cards = await screen.findAllByTestId("resCard");
    expect(cards).toHaveLength(12);
});