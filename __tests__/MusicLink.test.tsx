import { fireEvent, render, screen } from "@testing-library/react";
import MusicLink from "@components/Music/MusicLink";
import { mockedUsers } from "@mocks/mocks";

describe("Music Link Component", () => {
  it("Renders component", () => {
    let user = mockedUsers[0];
    render(<MusicLink music={user.links.music} />);

    const musicLink = screen.getByTestId("music-link");

    expect(musicLink).toBeInTheDocument();
  });

  it("One of users song rendered", () => {
    let user = mockedUsers[0];
    let songs = user.links.music;
    render(<MusicLink music={user.links.music} />);

    const song = screen.getByTestId(`song-link-${songs[0].songName}`);

    expect(song).toBeInTheDocument();
  });

  it("Song dropdown renders on Music button click", async () => {
    let user = mockedUsers[0];
    let songs = user.links.music;
    const { getByTestId } = render(<MusicLink music={user.links.music} />);

    const button = getByTestId("music-link-button");
    await fireEvent.click(button);
    const active = getByTestId("song-dropdown-active");
    expect(active).toBeInTheDocument();
  });

  it("Song renders on dropdown render", async () => {
    let user = mockedUsers[0];
    let songs = user.links.music;
    const { getByTestId } = render(<MusicLink music={user.links.music} />);

    const button = getByTestId("music-link-button");
    await fireEvent.click(button);
    expect(screen.queryByText("Lost In Japan")).toBeVisible();
  });

  it("Song renders on dropdown render", async () => {
    let user = mockedUsers[0];
    let songs = user.links.music;
    const { getByTestId } = render(<MusicLink music={user.links.music} />);

    const button = getByTestId("music-link-button");
    await fireEvent.click(button);
    expect(screen.queryByText("Lost In Japan")).toBeVisible();
  });

  /**
   * @TODO
   * Resolve SvgIcon jest render error preventing test below
   * Warning: React.jsx: type is invalid -- expected a string (for built-in components) or a 
   * class/function (for composite components) but got: object.
   * Check the render method of `SvgIcon`.
   */
//   it("Music Player for song opens when clicked and Spotify visible", async () => {
//     let user = mockedUsers[0];
//     let songs = user.links.music;
//     render(<MusicLink music={user.links.music} />);

//     const button = screen.getByTestId("music-link-button");
//     await fireEvent.click(button);
//     const songDetails = screen.getByTestId(`song-details-${songs[0].songName}`);
//     await fireEvent.click(songDetails);
//     expect(screen.queryByText("Spotify")).toBeVisible();
//   });
});
