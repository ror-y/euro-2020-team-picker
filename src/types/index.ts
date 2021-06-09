import { FlagIconCode } from "react-flag-kit";

export interface Coords {
  x: number;
  y: number;
}

export interface PlayerProps extends Coords {}

export type FormationItem = Coords & {
  id: number;
  type: Positions;
  name: string;
  squadNumber: number | null;
  displayName?: string;
};

export interface Formation {
  name: string;
  positions: FormationItem[];
}

export enum Positions {
  GK = "GK",
  DF = "DF",
  MF = "MF",
  FW = "FW",
}

export interface Player {
  name: string;
  positions: Array<Positions>;
  squadNumber: number;
  displayName?: string;
}

export enum Modes {
  Default = "Default",
  EditingPosition = "EditingPosition",
  PromptToSave = "PromptToSave",
  Finished = "Finished",
}

export enum Stages {
  PickCountry = "PickCountry",
  PickFormation = "PickFormation",
  PickTeamOnPitch = "PickTeamOnPitch",
}

type TeamName =
  | "Italy"
  | "Switzerland"
  | "Turkey"
  | "Wales"
  | "Belgium"
  | "Denmark"
  | "Finland"
  | "Russia"
  | "Austria"
  | "Netherlands"
  | "North Macedonia"
  | "Ukraine"
  | "Croatia"
  | "Czech Republic"
  | "England"
  | "Scotland"
  | "Poland"
  | "Slovakia"
  | "Spain"
  | "Sweden"
  | "France"
  | "Germany"
  | "Hungary"
  | "Portugal";

export interface TeamFromWiki {
  name: TeamName;
  flagCode: FlagIconCode;
  colors: {
    shirtMainColor: string;
    shirtNumberColor: string;
    shirtRimColor: string;
    titleColor: string;
  };
  players: Player[];
}
