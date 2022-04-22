import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { IUser, ISocialLink } from "../types/User";
import Head from "next/head";
import Image from "next/image";
import Container from "@components/Container";
import React from "react";
import Avatar from "@components/Avatar";
import Button from "@components/Button";
import SvgIcon from "@components/SvgIcon";
import NextLink from "@components/NextLink";
import BackgroundImage from "@components/BackgroundImage";

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
            className="rounded-full shadow-sm"
            src={user.avatar}
            alt="Picture of the author"
            width={64}
            height={64}
          ></Image>
          <h1 className="text-lg tracking-widest font-semibold">{`@${user.id}`}</h1>
        </Avatar>
        <ul className="flex flex-col gap-4">
          {user.links.socials.map((e: ISocialLink) => (
            <li key={e.socialsName}>
              <NextLink href={e.url} target="_blank">
                <Button>
                  <SvgIcon name={e.socialsName.toLocaleLowerCase()}>
                    {e.socialsName}
                  </SvgIcon>
                </Button>
              </NextLink>
            </li>
          ))}
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
              socialsName: "Facebook",
              url: "https://www.facebook.com/adrian.mroczek.14/",
            },
            {
              socialsName: "Instagram",
              url: "https://www.instagram.com/adr.mroczek/",
            },
            {
              socialsName: "Personal Website",
              url: "https://amroczek.dev/",
            },
          ],
          music: {
            songName: "",
            platforms: [
              {
                platformName: "",
                url: "",
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
        designPreferences: {
          backgroundColor: "",
          primaryColor: "",
          secondaryColor: "",
        },
        links: {
          socials: [
            {
              socialsName: "",
              url: "",
            },
          ],
          music: {
            songName: "",
            platforms: [
              {
                platformName: "",
                url: "",
              },
            ],
          },

          shows: [{ date: "", location: "", ticketsAvailable: true }],
        },
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
