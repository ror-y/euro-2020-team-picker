import { Positions } from "../types";

const y = {
  goalkeeper: 85,
  fullback: 57,
  centreback: 65,
  defensive_midfielder: 50,
  midfielder: 40,
  attacking_midfielder: 25,
  winger: 32,
  forward: 12,
};

const x = {
  left_extreme: 30,
  left: 40,
  centre: 50,
  right: 60,
  right_extreme: 70,
  fullback_winger_left: 15,
  fullback_winger_right: 85,
};

export const GOALKEEPER = {
  x: x.centre,
  y: y.goalkeeper,
  type: Positions.GK,
};

export const FULL_BACK_LEFT = {
  x: x.fullback_winger_left,
  y: y.fullback,
  type: Positions.DF,
};

export const CENTRE_BACK_LEFT_EXTREME = {
  x: x.left_extreme,
  y: y.centreback,
  type: Positions.DF,
};

export const CENTRE_BACK_LEFT = {
  x: x.left,
  y: y.centreback,
  type: Positions.DF,
};

export const CENTRE_BACK_CENTRE = {
  x: x.centre,
  y: y.centreback,
  type: Positions.DF,
};

export const CENTRE_BACK_RIGHT = {
  x: x.right,
  y: y.centreback,
  type: Positions.DF,
};

export const CENTRE_BACK_RIGHT_EXTREME = {
  x: x.right_extreme,
  y: y.centreback,
  type: Positions.DF,
};

export const FULL_BACK_RIGHT = {
  x: x.fullback_winger_right,
  y: y.fullback,
  type: Positions.DF,
};

export const WINGER_LEFT = {
  x: x.fullback_winger_left,
  y: y.winger,
  type: Positions.MF,
};

export const DEFENSIVE_MIDFIELDER_CENTRE_LEFT = {
  x: x.left,
  y: y.defensive_midfielder,
  type: Positions.MF,
};

export const DEFENSIVE_MIDFIELDER_CENTRE_CENTRE = {
  x: x.centre,
  y: y.defensive_midfielder,
  type: Positions.MF,
};

export const DEFENSIVE_MIDFIELDER_CENTRE_RIGHT = {
  x: x.right,
  y: y.defensive_midfielder,
  type: Positions.MF,
};

export const MIDFIELDER_CENTRE_LEFT_EXTREME = {
  x: x.left_extreme,
  y: y.midfielder,
  type: Positions.MF,
};

export const MIDFIELDER_CENTRE_LEFT = {
  x: x.left,
  y: y.midfielder,
  type: Positions.MF,
};

export const MIDFIELDER_CENTRE_CENTRE = {
  x: x.centre,
  y: y.midfielder + 5,
  type: Positions.MF,
};

export const MIDFIELDER_CENTRE_RIGHT = {
  x: x.right,
  y: y.midfielder,
  type: Positions.MF,
};

export const MIDFIELDER_CENTRE_RIGHT_EXTREME = {
  x: x.right_extreme,
  y: y.midfielder,
  type: Positions.MF,
};

export const WINGER_RIGHT = {
  x: x.fullback_winger_right,
  y: y.winger,
  type: Positions.MF,
};

export const ATTACKING_MIDFIELDER_LEFT = {
  x: x.fullback_winger_left,
  y: y.attacking_midfielder,
  type: Positions.MF,
};

export const ATTACKING_MIDFIELDER_CENTRE_LEFT = {
  x: x.left,
  y: y.attacking_midfielder,
  type: Positions.MF,
};

export const ATTACKING_MIDFIELDER_CENTRE_CENTRE = {
  x: x.centre,
  y: y.attacking_midfielder,
  type: Positions.MF,
};

export const ATTACKING_MIDFIELDER_CENTRE_RIGHT = {
  x: x.right,
  y: y.attacking_midfielder,
  type: Positions.MF,
};

export const ATTACKING_MIDFIELDER_RIGHT = {
  x: x.fullback_winger_right,
  y: y.attacking_midfielder,
  type: Positions.MF,
};

export const FORWARD_LEFT_EXTREME = {
  x: x.left_extreme - 3,
  y: y.forward + 3,
  type: Positions.FW,
};

export const FORWARD_LEFT = {
  x: x.left,
  y: y.forward,
  type: Positions.FW,
};

export const FORWARD_CENTRE = {
  x: x.centre,
  y: y.forward,
  type: Positions.FW,
};

export const FORWARD_RIGHT = {
  x: x.right,
  y: y.forward,
  type: Positions.FW,
};

export const FORWARD_RIGHT_EXTREME = {
  x: x.right_extreme + 3,
  y: y.forward + 3,
  type: Positions.FW,
};
