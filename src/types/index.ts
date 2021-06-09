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
  | "England"
  | "Germany"
  | "North Macedonia"
  | "France"
  | "Belgium";

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
