import { Positions, TeamFromWiki } from "../../types";

export const switzerland: TeamFromWiki = {
  name: "Switzerland",
  flagCode: "CH",
  colors: {
    shirtMainColor: "rgb(206, 10, 48)",
    shirtNumberColor: "rgb(255, 255, 255)",
    shirtRimColor: "rgb(255, 255, 255)",
    titleColor: "rgb(206, 10, 48)",
  },
  players: [
    { name: "Yann Sommer", squadNumber: 1, positions: [Positions.GK] },
    { name: "Yvon Mvogo", squadNumber: 12, positions: [Positions.GK] },
    { name: "Jonas Omlin", squadNumber: 21, positions: [Positions.GK] },
    { name: "Kevin Mbabu", squadNumber: 2, positions: [Positions.DF] },
    { name: "Silvan Widmer", squadNumber: 3, positions: [Positions.DF] },
    { name: "Nico Elvedi", squadNumber: 4, positions: [Positions.DF] },
    { name: "Manuel Akanji", squadNumber: 5, positions: [Positions.DF] },
    { name: "Ricardo Rodríguez", squadNumber: 13, positions: [Positions.DF] },
    { name: "Loris Benito", squadNumber: 17, positions: [Positions.DF] },
    { name: "Fabian Schär", squadNumber: 22, positions: [Positions.DF] },
    { name: "Bećir Omeragić", squadNumber: 24, positions: [Positions.DF] },
    { name: "Eray Cömert", squadNumber: 25, positions: [Positions.DF] },
    { name: "Jordan Lotomba", squadNumber: 26, positions: [Positions.DF] },
    { name: "Denis Zakaria", squadNumber: 6, positions: [Positions.MF] },
    { name: "Remo Freuler", squadNumber: 8, positions: [Positions.MF] },
    {
      name: "Granit Xhaka",
      squadNumber: 10,
      positions: [Positions.MF],
    },
    { name: "Steven Zuber", squadNumber: 14, positions: [Positions.MF] },
    { name: "Djibril Sow", squadNumber: 15, positions: [Positions.MF] },
    { name: "Edimilson Fernandes", squadNumber: 20, positions: [Positions.MF] },
    { name: "Xherdan Shaqiri", squadNumber: 23, positions: [Positions.MF] },
    { name: "Breel Embolo", squadNumber: 7, positions: [Positions.FW] },
    { name: "Haris Seferović", squadNumber: 9, positions: [Positions.FW] },
    { name: "Ruben Vargas", squadNumber: 11, positions: [Positions.FW] },
    { name: "Christian Fassnacht", squadNumber: 16, positions: [Positions.FW] },
    { name: "Admir Mehmedi", squadNumber: 18, positions: [Positions.FW] },
    { name: "Mario Gavranović", squadNumber: 19, positions: [Positions.FW] },
  ],
};
