import { render, screen } from "@testing-library/react";
import IndexPage from "../pages/index";
import { mockedUsers } from "@mocks/mocks";

describe("Index Page", () => {
  it("Renders Linktree Logo", () => {
    render(<IndexPage users={mockedUsers} />);

    const logo = screen.getByTestId("linktree-logo");

    expect(logo).toBeInTheDocument();
  });
  it("Renders mocked user", () => {
    render(<IndexPage users={mockedUsers} />);

    const user = screen.getByTestId(`user-${mockedUsers[0].id}`);

    expect(user).toBeInTheDocument();
  });
});
