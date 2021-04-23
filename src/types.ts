export type ContinentsProps = {
  id: number;
  name: string;
  description: string;
  image: string;
  bannerImage: string;
  bio: string;
  coutriesCount: number;
  languagesAmount: number;
  cities100: number;
  citiesToShow: CitiesProps[];
};

export interface CitiesProps {
  id: number;
  name: string;
  photo: string;
  country: string;
  flag: string;
}
