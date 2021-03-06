import { Positions, TeamFromWiki } from "../../types";

export const italy: TeamFromWiki = {
  name: "Italy",
  flagCode: "IT",
  colors: {
    shirtMainColor: "rgb(13, 99, 163)",
    shirtNumberColor: "rgb(255, 255, 255)",
    shirtRimColor: "rgb(194, 176, 126)",
    titleColor: "rgb(13, 99, 163)",
  },
  players: [
    { name: "Salvatore Sirigu", squadNumber: 1, positions: [Positions.GK] },
    {
      name: "Gianluigi Donnarumma",
      squadNumber: 21,
      positions: [Positions.GK],
    },
    { name: "Alex Meret", squadNumber: 26, positions: [Positions.GK] },
    {
      name: "Giovanni Di Lorenzo",
      squadNumber: 2,
      positions: [Positions.DF],
      displayName: "Di Lorenzo",
    },
    { name: "Giorgio Chiellini", squadNumber: 3, positions: [Positions.DF] },
    { name: "Leonardo Spinazzola", squadNumber: 4, positions: [Positions.DF] },
    { name: "Emerson", squadNumber: 13, positions: [Positions.DF] },
    { name: "Francesco Acerbi", squadNumber: 15, positions: [Positions.DF] },
    { name: "Leonardo Bonucci", squadNumber: 19, positions: [Positions.DF] },
    { name: "Alessandro Bastoni", squadNumber: 23, positions: [Positions.DF] },
    { name: "Alessandro Florenzi", squadNumber: 24, positions: [Positions.DF] },
    { name: "Rafael Tolói", squadNumber: 25, positions: [Positions.DF] },
    { name: "Manuel Locatelli", squadNumber: 5, positions: [Positions.MF] },
    { name: "Marco Verratti", squadNumber: 6, positions: [Positions.MF] },
    { name: "Gaetano Castrovilli", squadNumber: 7, positions: [Positions.MF] },
    { name: "Jorginho", squadNumber: 8, positions: [Positions.MF] },
    { name: "Matteo Pessina", squadNumber: 12, positions: [Positions.MF] },
    { name: "Federico Chiesa", squadNumber: 14, positions: [Positions.MF] },
    { name: "Bryan Cristante", squadNumber: 16, positions: [Positions.MF] },
    { name: "Nicolò Barella", squadNumber: 18, positions: [Positions.MF] },
    {
      name: "Federico Bernardeschi",
      squadNumber: 20,
      positions: [Positions.MF],
    },
    { name: "Andrea Belotti", squadNumber: 9, positions: [Positions.FW] },
    { name: "Lorenzo Insigne", squadNumber: 10, positions: [Positions.FW] },
    { name: "Domenico Berardi", squadNumber: 11, positions: [Positions.FW] },
    { name: "Ciro Immobile", squadNumber: 17, positions: [Positions.FW] },
    { name: "Giacomo Raspadori", squadNumber: 22, positions: [Positions.FW] },
  ],
};
