import { Positions } from "../types";

const y = {
  goalkeeper: 87,
  fullback: 60,
  centreback: 70,
  defensive_midfielder: 55,
  midfielder: 40,
  attacking_midfielder: 30,
  winger: 30,
  forward: 14,
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
  y: y.midfielder,
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

export const FORWARD_LEFT_EXTREME = {
  x: x.left_extreme,
  y: y.forward,
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
  x: x.right_extreme,
  y: y.forward,
  type: Positions.FW,
};
