import { Formation, FormationItem } from "../types";
import {
  GOALKEEPER,
  FULL_BACK_LEFT,
  CENTRE_BACK_LEFT_EXTREME,
  CENTRE_BACK_LEFT,
  CENTRE_BACK_CENTRE,
  CENTRE_BACK_RIGHT,
  CENTRE_BACK_RIGHT_EXTREME,
  FULL_BACK_RIGHT,
  MIDFIELDER_LEFT,
  MIDFIELDER_CENTRE_LEFT_EXTREME,
  MIDFIELDER_CENTRE_LEFT,
  MIDFIELDER_CENTRE_CENTRE,
  MIDFIELDER_CENTRE_RIGHT,
  MIDFIELDER_CENTRE_RIGHT_EXTREME,
  MIDFIELDER_RIGHT,
  FORWARD_LEFT,
  FORWARD_RIGHT,
  FORWARD_LEFT_EXTREME,
  FORWARD_RIGHT_EXTREME,
  FORWARD_CENTRE,
} from "./positionPlots";

const applyIds = (
  players: Omit<FormationItem, "id" | "name" | "squadNumber">[]
): FormationItem[] => {
  return players.map((player, i) => {
    return { ...player, id: i, name: "", squadNumber: null };
  });
};

export const formations: Formation[] = [
  {
    name: "433",
    positions: applyIds([
      GOALKEEPER,
      FULL_BACK_LEFT,
      CENTRE_BACK_LEFT,
      CENTRE_BACK_RIGHT,
      FULL_BACK_RIGHT,
      MIDFIELDER_CENTRE_LEFT_EXTREME,
      MIDFIELDER_CENTRE_CENTRE,
      MIDFIELDER_CENTRE_RIGHT_EXTREME,
      FORWARD_LEFT_EXTREME,
      FORWARD_CENTRE,
      FORWARD_RIGHT_EXTREME,
    ]),
  },
  {
    name: "442",
    positions: applyIds([
      GOALKEEPER,
      FULL_BACK_LEFT,
      CENTRE_BACK_LEFT,
      CENTRE_BACK_RIGHT,
      FULL_BACK_RIGHT,
      MIDFIELDER_LEFT,
      MIDFIELDER_CENTRE_LEFT,
      MIDFIELDER_CENTRE_RIGHT,
      MIDFIELDER_RIGHT,
      FORWARD_LEFT,
      FORWARD_RIGHT,
    ]),
  },
  {
    name: "352",
    positions: applyIds([
      GOALKEEPER,
      CENTRE_BACK_LEFT_EXTREME,
      CENTRE_BACK_CENTRE,
      CENTRE_BACK_RIGHT_EXTREME,
      MIDFIELDER_LEFT,
      MIDFIELDER_CENTRE_LEFT_EXTREME,
      MIDFIELDER_CENTRE_CENTRE,
      MIDFIELDER_CENTRE_RIGHT_EXTREME,
      MIDFIELDER_RIGHT,
      FORWARD_LEFT,
      FORWARD_RIGHT,
    ]),
  },
];
