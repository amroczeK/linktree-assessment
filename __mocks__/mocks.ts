import { IUsers } from "../types/User";

export const mockedUsers: IUsers = [
  {
    id: "adrianm",
    avatar: "/assets/adrian-profile-picture.png",
    designPreferences: {
      backgroundColor: "bg-gray-50",
      backgroundImageUrl: "/assets/backgrounds/background1.jpg",
      primaryColor: "bg-green-500",
      secondaryColor: "gray-300",
      hoverColor: "hover:bg-green-300",
      ringColor: "ring-green-400",
    },
    links: {
      socials: [
        {
          name: "Facebook",
          url: "https://www.facebook.com/adrian.mroczek.14/",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/adr.mroczek/",
        },
        {
          name: "Personal Website",
          url: "https://amroczek.dev/",
        },
      ],
      music: [
        {
          songName: "Lost In Japan",
          artistName: "Shawn Mendes, Zedd",
          thumbnail: "/assets/music/lost-in-japan-thumbnail.jpeg",
          platforms: [
            {
              name: "Spotify",
              url: "https://open.spotify.com/track/3WRQUvzRvBDr4AxMWhXc5E?si=ebc7378d59854b66",
            },
            {
              name: "Apple Music",
              url: "https://apple.music.com/track/3WRQUvzRvBDr4AxMWhXc5E?si=ebc7378d59854b66",
            },
            {
              name: "Youtube Music",
              url: "https://youtube.music.com/track/3WRQUvzRvBDr4AxMWhXc5E?si=ebc7378d59854b66",
            },
            {
              name: "Deezer",
              url: "https://deezer.music.com/track/3WRQUvzRvBDr4AxMWhXc5E?si=ebc7378d59854b66",
            },
            {
              name: "Tidal",
              url: "https:/tidal.com/track/3WRQUvzRvBDr4AxMWhXc5E?si=ebc7378d59854b66",
            },
            {
              name: "Bandcamp",
              url: "https:/bandcamp.com/track/3WRQUvzRvBDr4AxMWhXc5E?si=ebc7378d59854b66",
            },
          ],
        },
        {
          songName: "Sunset Lover",
          artistName: "Petit Biscuit",
          thumbnail: "/assets/music/sunset-lover-thumbnail.jpg",
          platforms: [
            {
              name: "Spotify",
              url: "https://open.spotify.com/track/3WRQUvzRvBDr4AxMWhXc5E?si=ebc7378d59854b66",
            },
            {
              name: "Apple Music",
              url: "https://apple.music.com/track/3WRQUvzRvBDr4AxMWhXc5E?si=ebc7378d59854b66",
            },
            {
              name: "Youtube Music",
              url: "https://youtube.music.com/track/3WRQUvzRvBDr4AxMWhXc5E?si=ebc7378d59854b66",
            },
            {
              name: "Deezer",
              url: "https://deezer.music.com/track/3WRQUvzRvBDr4AxMWhXc5E?si=ebc7378d59854b66",
            },
            {
              name: "Tidal",
              url: "https:/tidal.com/track/3WRQUvzRvBDr4AxMWhXc5E?si=ebc7378d59854b66",
            },
            {
              name: "Bandcamp",
              url: "https:/bandcamp.com/track/3WRQUvzRvBDr4AxMWhXc5E?si=ebc7378d59854b66",
            },
          ],
        },
      ],
      shows: [
        {
          showName: "Ghost Care",
          artistName: "",
          date: new Date("2022/04/23"),
          location: "Prince Of Wales Hotel, Bunbury, WA, Australia",
          ticketsAvailable: true,
          url: "https://www.songkick.com/concerts/40300239-ghost-care-at-prince-of-wales-hotel",
        },
        {
          showName: "Brian Cadd",
          artistName: "Russell Morris",
          date: new Date("2022/04/24"),
          location: "Ravenswood Hotel, Ravenswood, WA, Australia",
          ticketsAvailable: false,
          url: "https://www.songkick.com/concerts/39944448-brian-cadd-at-ravenswood-hotel",
        },
        {
          showName: "The Southern River Band",
          date: new Date("2022/04/30"),
          location: "The River, Margaret River, WA, Australia",
          ticketsAvailable: true,
          url: "https://www.songkick.com/concerts/40334571-southern-river-band-at-river",
        },
      ],
    },
  },
];