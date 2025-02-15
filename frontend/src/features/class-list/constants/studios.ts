import { Location } from "./../types/Location";

interface Studio {
  location: Location;
  timezone: string;
}

export const STUDIOS: { [key: string]: Studio } = {
  "25900000001": {
    location: "New York",
    timezone: "America/New_York",
  },
  "927437471153653374": {
    location: "London",
    timezone: "Europe/London",
  },
};
