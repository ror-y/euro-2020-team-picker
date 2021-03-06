import { Positions, TeamFromWiki } from "../../types";

export const hungary: TeamFromWiki = {
  name: "Hungary",
  flagCode: "HU",
  colors: {
    shirtMainColor: "rgb(255, 255, 255)",
    shirtNumberColor: "rgb(197, 44, 64)",
    shirtRimColor: "rgb(67, 108, 76)",
    titleColor: "rgb(197, 44, 64)",
  },
  players: [
    {
      name: "Péter Gulácsi",
      squadNumber: 1,
      positions: [Positions.GK],
    },
    { name: "Dénes Dibusz", squadNumber: 12, positions: [Positions.GK] },
    { name: "Ádám Bogdán", squadNumber: 22, positions: [Positions.GK] },
    { name: "Ádám Lang", squadNumber: 2, positions: [Positions.DF] },
    { name: "Ákos Kecskés", squadNumber: 3, positions: [Positions.DF] },
    {
      name: "Attila Szalai",
      squadNumber: 4,
      positions: [Positions.DF],
      displayName: "At. Szalai",
    },
    { name: "Attila Fiola", squadNumber: 5, positions: [Positions.DF] },
    { name: "Willi Orbán", squadNumber: 6, positions: [Positions.DF] },
    { name: "Gergő Lovrencsics", squadNumber: 14, positions: [Positions.DF] },
    { name: "Endre Botka", squadNumber: 21, positions: [Positions.DF] },
    { name: "Bendegúz Bolla", squadNumber: 26, positions: [Positions.DF] },
    { name: "Loïc Négo", squadNumber: 7, positions: [Positions.MF] },
    { name: "Ádám Nagy", squadNumber: 8, positions: [Positions.MF] },
    { name: "Tamás Cseri", squadNumber: 10, positions: [Positions.MF] },
    { name: "András Schäfer", squadNumber: 13, positions: [Positions.MF] },
    { name: "László Kleinheisler", squadNumber: 15, positions: [Positions.MF] },
    { name: "Dániel Gazdag", squadNumber: 16, positions: [Positions.MF] },
    { name: "Dávid Sigér", squadNumber: 18, positions: [Positions.MF] },
    {
      name: "Ádám Szalai",
      squadNumber: 9,
      positions: [Positions.FW],
      displayName: "Ad. Szalai",
    },
    {
      name: "Filip Holender",
      squadNumber: 11,
      positions: [Positions.FW, Positions.MF],
    },
    {
      name: "Roland Varga",
      squadNumber: 17,
      positions: [Positions.FW],
      displayName: "R. Varga",
    },
    {
      name: "Kevin Varga",
      squadNumber: 19,
      positions: [Positions.FW],
      displayName: "K. Varga",
    },
    {
      name: "Roland Sallai",
      squadNumber: 20,
      positions: [Positions.FW, Positions.MF],
    },
    { name: "Nemanja Nikolić", squadNumber: 23, positions: [Positions.FW] },
    { name: "Szabolcs Schön", squadNumber: 24, positions: [Positions.FW] },
    { name: "János Hahn", squadNumber: 25, positions: [Positions.FW] },
  ],
};
