import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { IUser, ISocialLink, IMusic } from "../types/User";
import Head from "next/head";
import Image from "next/image";
import Container from "@components/Container";
import React from "react";
import Avatar from "@components/Avatar";
import Button from "@components/Button";
import SvgIcon from "@components/SvgIcon";
import NextLink from "@components/NextLink";
import BackgroundImage from "@components/BackgroundImage";
import SocialLink from "@components/ExternalLink";
import MusicLink from "@components/MusicLink";

interface Props {
  user: IUser;
}

const UserLinks: NextPage<Props> = ({ user }) => {
  const { backgroundColor, backgroundImageUrl, primaryColor, secondaryColor } =
    user.designPreferences;

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Head>
        <title>Linktree Assessment</title>
        <meta name="description" content="Linktree assessment project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        backgroundColor={backgroundColor}
        backgroundImageUrl={backgroundImageUrl}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      >
        {/* <BackgroundImage backgroundImageUrl={backgroundImageUrl} /> */}
        <Avatar>
          <Image
            className="rounded-full"
            src={user.avatar}
            alt="Picture of the author"
            width={64}
            height={64}
          ></Image>
          <h1 className="text-lg tracking-widest font-semibold">{`@${user.id}`}</h1>
        </Avatar>
        <ul className="flex flex-col gap-4">
          {user.links.socials.map((e: ISocialLink) => (
            <li key={e.name}>
              <SocialLink linkDetails={e} />
            </li>
          ))}
          {user.links.music.songName && (
            <li>
              <MusicLink musicDetails={user.links.music}>Music</MusicLink>
            </li>
          )}
        </ul>
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-center">
          <Image
            src="/assets/logo.svg"
            height={64}
            width="100%"
            alt="linktree-logo"
          />
        </div>
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
          backgroundColor: "slate-50",
          backgroundImageUrl: "/assets/backgrounds/background1.jpg",
          primaryColor: "gray-50",
          secondaryColor: "gray-900",
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
          music: {
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

          shows: [{ date: "", location: "", ticketsAvailable: true }],
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
