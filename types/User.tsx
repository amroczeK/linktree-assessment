export interface ISocialLink {
    socialsName: string;
    url: string;
}

export interface ISocials extends Array<ISocialLink>{
    [index: number]: ISocialLink;
}

export interface IPlatformDetails {
    platformName: string;
    url: string;
}

export interface IPlatforms extends Array<IPlatformDetails>{
    [index: number]: IPlatformDetails;
}

export interface IMusic {
  songName: string;
  platforms: IPlatforms;
}

export interface IShowDetails {
  date: Date;
  location: string;
  ticketsAvailable: boolean;
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
}

export interface IUser {
  id: string;
  avatar: string
  designPreferences: IDesignPreferences;
  links: ILinks;
}