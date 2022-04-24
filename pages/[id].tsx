import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { IUser, ISocialLink } from "../types/User";
import Head from "next/head";
import Image from "next/image";
import Container from "@components/Container";
import React, { useEffect } from "react";
import Avatar from "@components/Avatar";
import SocialLink from "@components/ExternalLink";
import MusicLink from "@components/MusicLink";
import Footer from "@components/Footer";
import { useUserPerferences } from "../contexts/UserPreferenceContext";
import ShowsLink from "@components/ShowsLink";

interface Props {
  user: IUser;
}

const UserLinks: NextPage<Props> = ({ user }: Props) => {
  const { backgroundColor } = user.designPreferences;

  const { setUserPreferences } = useUserPerferences();

  useEffect(() => {
    setUserPreferences(user.designPreferences);
  }, [user, setUserPreferences]);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Head>
        <title>Linktree Assessment</title>
        <meta name="description" content="Linktree assessment project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container backgroundColor={backgroundColor}>
        <Avatar data-testid={`avatar-${user.id}`}>
          <Image
            className="rounded-full"
            src={user.avatar}
            alt="Picture of the author"
            width={64}
            height={64}
            priority
          ></Image>
          <h1 className="text-lg tracking-widest font-semibold">{`@${user.id}`}</h1>
        </Avatar>
        <ul className="flex flex-col gap-4">
          {user.links.socials.map((e: ISocialLink) => (
            <li key={e.name}>
              <SocialLink linkDetails={e} />
            </li>
          ))}
          <MusicLink music={user.links.music}>Music</MusicLink>
          <ShowsLink shows={user.links.shows}>Shows</ShowsLink>
        </ul>
        <Footer />
      </Container>
    </div>
  );
};

export default UserLinks;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;

  const data = {
    users: [
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
              date: "2022/04/23",
              location: "Prince Of Wales Hotel, Bunbury, WA, Australia",
              ticketsAvailable: true,
              url: "https://www.songkick.com/concerts/40300239-ghost-care-at-prince-of-wales-hotel",
            },
            {
              showName: "Brian Cadd",
              artistName: "Russell Morris",
              date: "2022/04/24",
              location: "Ravenswood Hotel, Ravenswood, WA, Australia",
              ticketsAvailable: false,
              url: "https://www.songkick.com/concerts/39944448-brian-cadd-at-ravenswood-hotel",
            },
            {
              showName: "The Southern River Band",
              date: "2022/04/30",
              location: "The River, Margaret River, WA, Australia",
              ticketsAvailable: true,
              url: "https://www.songkick.com/concerts/40334571-southern-river-band-at-river",
            },
          ],
        },
      },
    ],
  };

  const user = data.users.find((x) => x.id === id);

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = {
    users: [
      {
        id: "adrianm",
      },
    ],
  };

  return {
    paths: data.users?.map(({ id }) => {
      return {
        params: { id },
      };
    }),
    fallback: "blocking",
  };
};
