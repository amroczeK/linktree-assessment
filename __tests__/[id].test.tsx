import { render, screen } from "@testing-library/react";
import UserPage from "../pages/[id]";
import { mockedUsers } from "@mocks/mocks";
import { IUser } from "../types/User";

describe("Dynamic User Route Page", () => {
  it("Renders Linktree Logo", () => {
    const user: IUser = mockedUsers[0];
    console.log(user)
    render(<UserPage user={user} />);

    const logo = screen.getByTestId(`avatar-${user.id}`);

    expect(logo).toBeInTheDocument();
  });
});