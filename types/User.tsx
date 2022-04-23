export interface ISocialLink {
    name: string;
    url: string;
}

export interface ISocials extends Array<ISocialLink>{
    [index: number]: ISocialLink;
}

export interface IPlatformDetails {
    name: string;
    url: string;
}

export interface IPlatforms extends Array<IPlatformDetails>{
    [index: number]: IPlatformDetails;
}

export interface ISong {
  songName: string;
  artistName: string;
  thumbnail: string;
  platforms: IPlatforms;
}

export interface IMusic extends Array<ISong> {
  [index: number]: ISong;
}

export interface IShowDetails {
  showName: string;
  artistName?: string;
  date: Date;
  location: string;
  ticketsAvailable: boolean;
  url: string;
}

export interface IShows extends Array<IShowDetails>{
    [index: number]: IShowDetails;
}

export interface ILinks {
    socials: ISocials;
    music: IMusic;
    shows: IShows;
}

export interface IDesignPreferences {
    backgroundColor: string;
    backgroundImageUrl: string;
    primaryColor: string;
    secondaryColor: string;
    hoverColor: string;
    ringColor: string;
}

export interface IUser {
  id: string;
  avatar: string
  designPreferences: IDesignPreferences;
  links: ILinks;
}

export interface IUsers extends Array<IUser> {
  [index: number]: IUser;
}