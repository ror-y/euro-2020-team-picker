import { Positions, TeamFromWiki } from "../../types";

export const england: TeamFromWiki = {
  name: "England",
  flagCode: "GB-ENG",
  colors: {
    shirtMainColor: "rgb(255, 255, 255)",
    shirtNumberColor: "rgb(46, 90, 170)",
    shirtRimColor: "rgb(204, 22, 43)",
    titleColor: "rgb(46, 90, 170)",
  },
  players: [
    {
      name: "Jordan Pickford",
      squadNumber: 1,
      positions: [Positions.GK],
    },
    {
      name: "Dean Henderson",
      squadNumber: 13,
      positions: [Positions.GK],
    },
    {
      name: "Sam Johnstone",
      squadNumber: 23,
      positions: [Positions.GK],
    },
    {
      name: "Kyle Walker",
      squadNumber: 2,
      positions: [Positions.DF],
    },
    {
      name: "Luke Shaw",
      squadNumber: 3,
      positions: [Positions.DF],
    },
    {
      name: "John Stones",
      squadNumber: 5,
      positions: [Positions.DF],
    },
    {
      name: "Harry Maguire",
      squadNumber: 6,
      positions: [Positions.DF],
    },
    {
      name: "Kieran Trippier",
      squadNumber: 12,
      positions: [Positions.DF],
    },
    {
      name: "Tyrone Mings",
      squadNumber: 15,
      positions: [Positions.DF],
    },
    {
      name: "Conor Coady",
      squadNumber: 16,
      positions: [Positions.DF],
    },
    {
      name: "Ben Chilwell",
      squadNumber: 21,
      positions: [Positions.DF],
    },
    {
      name: "Reece James",
      squadNumber: 24,
      positions: [Positions.DF],
    },
    {
      name: "Declan Rice",
      squadNumber: 4,
      positions: [Positions.MF],
    },
    {
      name: "Jordan Henderson",
      squadNumber: 8,
      positions: [Positions.MF],
    },
    {
      name: "Kalvin Phillips",
      squadNumber: 14,
      positions: [Positions.MF],
    },
    {
      name: "Mason Mount",
      squadNumber: 19,
      positions: [Positions.MF],
    },
    {
      name: "Jude Bellingham",
      squadNumber: 26,
      positions: [Positions.MF],
    },
    {
      name: "Jack Grealish",
      squadNumber: 7,
      positions: [Positions.MF, Positions.FW],
    },
    {
      name: "Harry Kane",
      squadNumber: 9,
      positions: [Positions.FW],
    },
    {
      name: "Raheem Sterling",
      squadNumber: 10,
      positions: [Positions.MF, Positions.FW],
    },
    {
      name: "Marcus Rashford",
      squadNumber: 11,
      positions: [Positions.FW],
    },
    {
      name: "Jadon Sancho",
      squadNumber: 17,
      positions: [Positions.MF, Positions.FW],
    },
    {
      name: "Dominic Calvert-Lewin",
      squadNumber: 18,
      positions: [Positions.FW],
    },
    {
      name: "Phil Foden",
      squadNumber: 20,
      positions: [Positions.MF, Positions.FW],
    },
    {
      name: "Bukayo Saka",
      squadNumber: 25,
      positions: [Positions.MF, Positions.FW],
    },
  ],
};
