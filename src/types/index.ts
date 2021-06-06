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
  position: Positions;
  squadNumber: number;
}

export enum Modes {
  Default = "Default",
  EditingPosition = "EditingPosition",
  PromptToSave = "PromptToSave",
}

type TeamName = "England" | "Germany" | "North Macedonia";

export interface TeamFromWiki {
  name: TeamName;
  colors: {
    shirtMainColor: string;
    shirtNumberColor: string;
    shirtRimColor: string;
    titleColor: string;
  };
  players: Player[];
}
