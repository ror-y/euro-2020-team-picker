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
  DEFENSIVE_MIDFIELDER_CENTRE_LEFT,
  DEFENSIVE_MIDFIELDER_CENTRE_CENTRE,
  DEFENSIVE_MIDFIELDER_CENTRE_RIGHT,
  WINGER_LEFT,
  MIDFIELDER_CENTRE_LEFT_EXTREME,
  MIDFIELDER_CENTRE_LEFT,
  MIDFIELDER_CENTRE_CENTRE,
  MIDFIELDER_CENTRE_RIGHT,
  MIDFIELDER_CENTRE_RIGHT_EXTREME,
  WINGER_RIGHT,
  ATTACKING_MIDFIELDER_LEFT,
  ATTACKING_MIDFIELDER_CENTRE_LEFT,
  ATTACKING_MIDFIELDER_CENTRE_CENTRE,
  ATTACKING_MIDFIELDER_CENTRE_RIGHT,
  ATTACKING_MIDFIELDER_RIGHT,
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
    name: "4-3-3",
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
    name: "4-4-2",
    positions: applyIds([
      GOALKEEPER,
      FULL_BACK_LEFT,
      CENTRE_BACK_LEFT,
      CENTRE_BACK_RIGHT,
      FULL_BACK_RIGHT,
      WINGER_LEFT,
      MIDFIELDER_CENTRE_LEFT,
      MIDFIELDER_CENTRE_RIGHT,
      WINGER_RIGHT,
      FORWARD_LEFT,
      FORWARD_RIGHT,
    ]),
  },
  {
    name: "3-5-2",
    positions: applyIds([
      GOALKEEPER,
      CENTRE_BACK_LEFT_EXTREME,
      CENTRE_BACK_CENTRE,
      CENTRE_BACK_RIGHT_EXTREME,
      WINGER_LEFT,
      MIDFIELDER_CENTRE_LEFT_EXTREME,
      MIDFIELDER_CENTRE_CENTRE,
      MIDFIELDER_CENTRE_RIGHT_EXTREME,
      WINGER_RIGHT,
      FORWARD_LEFT,
      FORWARD_RIGHT,
    ]),
  },
  {
    name: "4-4-2 Diamond",
    positions: applyIds([
      GOALKEEPER,
      FULL_BACK_LEFT,
      CENTRE_BACK_LEFT,
      CENTRE_BACK_RIGHT,
      FULL_BACK_RIGHT,
      DEFENSIVE_MIDFIELDER_CENTRE_CENTRE,
      MIDFIELDER_CENTRE_LEFT,
      MIDFIELDER_CENTRE_RIGHT,
      ATTACKING_MIDFIELDER_CENTRE_CENTRE,
      FORWARD_LEFT,
      FORWARD_RIGHT,
    ]),
  },
  {
    name: "4-1-4-1",
    positions: applyIds([
      GOALKEEPER,
      FULL_BACK_LEFT,
      CENTRE_BACK_LEFT,
      CENTRE_BACK_RIGHT,
      FULL_BACK_RIGHT,
      DEFENSIVE_MIDFIELDER_CENTRE_CENTRE,
      MIDFIELDER_CENTRE_LEFT,
      MIDFIELDER_CENTRE_RIGHT,
      WINGER_LEFT,
      WINGER_RIGHT,
      FORWARD_CENTRE,
    ]),
  },
  {
    name: "3-4-3",
    positions: applyIds([
      GOALKEEPER,
      CENTRE_BACK_LEFT_EXTREME,
      CENTRE_BACK_CENTRE,
      CENTRE_BACK_RIGHT_EXTREME,
      WINGER_LEFT,
      MIDFIELDER_CENTRE_LEFT,
      MIDFIELDER_CENTRE_RIGHT,
      WINGER_RIGHT,
      FORWARD_LEFT_EXTREME,
      FORWARD_CENTRE,
      FORWARD_RIGHT_EXTREME,
    ]),
  },
  {
    name: "5-3-2",
    positions: applyIds([
      GOALKEEPER,
      FULL_BACK_LEFT,
      CENTRE_BACK_LEFT_EXTREME,
      CENTRE_BACK_CENTRE,
      CENTRE_BACK_RIGHT_EXTREME,
      FULL_BACK_RIGHT,
      MIDFIELDER_CENTRE_LEFT_EXTREME,
      MIDFIELDER_CENTRE_CENTRE,
      MIDFIELDER_CENTRE_RIGHT_EXTREME,
      FORWARD_LEFT,
      FORWARD_RIGHT,
    ]),
  },
  {
    name: "4-2-3-1",
    positions: applyIds([
      GOALKEEPER,
      FULL_BACK_LEFT,
      CENTRE_BACK_LEFT,
      CENTRE_BACK_RIGHT,
      FULL_BACK_RIGHT,
      MIDFIELDER_CENTRE_LEFT,
      MIDFIELDER_CENTRE_RIGHT,
      ATTACKING_MIDFIELDER_LEFT,
      ATTACKING_MIDFIELDER_CENTRE_CENTRE,
      ATTACKING_MIDFIELDER_RIGHT,
      FORWARD_CENTRE,
    ]),
  },
  {
    name: "3-4-1-2",
    positions: applyIds([
      GOALKEEPER,
      CENTRE_BACK_LEFT_EXTREME,
      CENTRE_BACK_CENTRE,
      CENTRE_BACK_RIGHT_EXTREME,
      WINGER_LEFT,
      MIDFIELDER_CENTRE_LEFT,
      MIDFIELDER_CENTRE_RIGHT,
      WINGER_RIGHT,
      ATTACKING_MIDFIELDER_CENTRE_CENTRE,
      FORWARD_LEFT,
      FORWARD_RIGHT,
    ]),
  },
  {
    name: "4-3-1-2",
    positions: applyIds([
      GOALKEEPER,
      FULL_BACK_LEFT,
      CENTRE_BACK_LEFT,
      CENTRE_BACK_RIGHT,
      FULL_BACK_RIGHT,
      MIDFIELDER_CENTRE_LEFT_EXTREME,
      MIDFIELDER_CENTRE_CENTRE,
      MIDFIELDER_CENTRE_RIGHT_EXTREME,
      ATTACKING_MIDFIELDER_CENTRE_CENTRE,
      FORWARD_LEFT,
      FORWARD_RIGHT,
    ]),
  },
];
