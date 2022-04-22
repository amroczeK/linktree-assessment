import { FC } from "react";
import Image from "next/image";
import AppleMusic from "@public/assets/icons/apple-music.svg";
import Arrow from "@public/assets/icons/arrow.svg";
import BandCamp from "@public/assets/icons/bandcamp.svg";
import BandsInTownWordmark from "@public/assets/icons/bandsintown-wordmark.svg";
import BandsInTown from "@public/assets/icons/bandsintown.svg";
import BySongKickWordmark from "@public/assets/icons/by-songkick-wordmark.svg";
import Deezer from "@public/assets/icons/deezer.svg";
import Facebook from "@public/assets/icons/facebook.svg";
import Instagram from "@public/assets/icons/instagram.svg";
import Play from "@public/assets/icons/play.svg";
import Songkick from "@public/assets/icons/songkick.svg";
import Soundcloud from "@public/assets/icons/soundcloud.svg";
import Spotify from "@public/assets/icons/spotify.svg";
import Ticketmaster from "@public/assets/icons/ticketmaster.svg";
import Tidal from "@public/assets/icons/tidal.svg";
import Twitter from "@public/assets/icons/twitter.svg";
import Youtube from "@public/assets/icons/youtube.svg";
import LinkedIn from "@public/assets/icons/linkedin.svg";
import GitHub from "@public/assets/icons/github.svg";

const iconTypes = {
  applemusic: AppleMusic,
  arrow: Arrow,
  bandcamp: BandCamp,
  bandsintownwordmark: BandsInTownWordmark,
  bandsintown: BandsInTown,
  bysongkickwordmark: BySongKickWordmark,
  deezer: Deezer,
  facebook: Facebook,
  instagram: Instagram,
  play: Play,
  songkick: Songkick,
  soundcloud: Soundcloud,
  spotify: Spotify,
  ticketmaster: Ticketmaster,
  tidal: Tidal,
  twitter: Twitter,
  youtube: Youtube,
  linkedin: LinkedIn,
  github: GitHub
};

interface Props {
  children?: React.ReactNode;
  name: string;
}

const SvgIcon: FC<Props> = ({ children, name, ...props }) => {
  let Icon = iconTypes.hasOwnProperty(name) ? iconTypes[name] : null;

  return (
    <div className="flex gap-2">
      {Icon && <Icon/>}
      {children}
    </div>
  );
};

export default SvgIcon;
