import { Positions, TeamFromWiki } from "../../types";

export const belgium: TeamFromWiki = {
  name: "Belgium",
  flagCode: "BE",
  colors: {
    shirtMainColor: "rgb(170, 38, 33)",
    shirtNumberColor: "rgb(247, 231, 51)",
    shirtRimColor: "rgb(0, 0, 0)",
    titleColor: "rgb(170, 38, 33)",
  },
  players: [
    {
      name: "Thibaut Courtois",
      squadNumber: 1,
      positions: [Positions.GK],
    },
    {
      name: "Simon Mignolet",
      squadNumber: 12,
      positions: [Positions.GK],
    },
    {
      name: "Matz Sels",
      squadNumber: 13,
      positions: [Positions.GK],
    },
    {
      name: "Toby Alderweireld",
      squadNumber: 2,
      positions: [Positions.DF],
    },
    {
      name: "Thomas Vermaelen",
      squadNumber: 3,
      positions: [Positions.DF],
    },
    {
      name: "Dedryck Boyata",
      squadNumber: 4,
      positions: [Positions.DF],
    },
    {
      name: "Jan Vertonghen",
      squadNumber: 5,
      positions: [Positions.DF],
    },
    {
      name: "Thomas Meunier",
      squadNumber: 15,
      positions: [Positions.DF],
    },
    {
      name: "Jason Denayer",
      squadNumber: 18,
      positions: [Positions.DF],
    },
    {
      name: "Leander Dendoncker",
      squadNumber: 19,
      positions: [Positions.DF],
    },
    {
      name: "Timothy Castagne",
      squadNumber: 21,
      positions: [Positions.DF],
    },
    {
      name: "Axel Witsel",
      squadNumber: 6,
      positions: [Positions.MF],
    },
    {
      name: "Kevin De Bruyne",
      squadNumber: 7,
      positions: [Positions.MF],
    },
    {
      name: "Youri Tielemans",
      squadNumber: 8,
      positions: [Positions.MF],
    },
    {
      name: "Yannick Carrasco",
      squadNumber: 11,
      positions: [Positions.MF],
    },
    {
      name: "Thorgan Hazard",
      squadNumber: 16,
      positions: [Positions.MF],
    },
    {
      name: "Hans Vanaken",
      squadNumber: 17,
      positions: [Positions.MF],
    },
    {
      name: "Nacer Chadli",
      squadNumber: 22,
      positions: [Positions.MF],
    },
    {
      name: "Dennis Praet",
      squadNumber: 26,
      positions: [Positions.MF],
    },
    {
      name: "Romelu Lukaku",
      squadNumber: 9,
      positions: [Positions.FW],
    },
    {
      name: "Eden Hazard",
      squadNumber: 10,
      positions: [Positions.FW, Positions.MF],
    },
    {
      name: "Dries Mertens",
      squadNumber: 14,
      positions: [Positions.FW, Positions.MF],
    },
    {
      name: "Christian Benteke",
      squadNumber: 20,
      positions: [Positions.FW],
    },
    {
      name: "Michy Batshuayi",
      squadNumber: 23,
      positions: [Positions.FW],
    },
    {
      name: "Leandro Trossard",
      squadNumber: 24,
      positions: [Positions.FW],
    },
    {
      name: "Jérémy Doku",
      squadNumber: 25,
      positions: [Positions.FW],
    },
  ],
};
