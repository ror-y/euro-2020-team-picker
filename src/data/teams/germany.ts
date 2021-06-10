import { Positions, TeamFromWiki } from "../../types";

export const germany: TeamFromWiki = {
  name: "Germany",
  flagCode: "DE",
  colors: {
    shirtMainColor: "rgb(255, 255, 255)",
    shirtNumberColor: "rgb(23, 21, 19)",
    shirtRimColor: "rgb(23, 21, 19)",
    titleColor: "rgb(23, 21, 19)",
  },
  players: [
    {
      name: "Manuel Neuer",
      squadNumber: 1,
      positions: [Positions.GK],
    },
    {
      name: "Bernd Leno",
      squadNumber: 12,
      positions: [Positions.GK],
    },
    {
      name: "Kevin Trapp",
      squadNumber: 22,
      positions: [Positions.GK],
    },
    {
      name: "Antonio Rüdiger",
      squadNumber: 2,
      positions: [Positions.DF],
    },
    {
      name: "Marcel Halstenberg",
      squadNumber: 3,
      positions: [Positions.DF],
    },
    {
      name: "Matthias Ginter",
      squadNumber: 4,
      positions: [Positions.DF],
    },
    {
      name: "Mats Hummels",
      squadNumber: 5,
      positions: [Positions.DF],
    },
    {
      name: "Niklas Süle",
      squadNumber: 15,
      positions: [Positions.DF],
    },
    {
      name: "Lukas Klostermann",
      squadNumber: 16,
      positions: [Positions.DF],
    },
    {
      name: "Robin Gosens",
      squadNumber: 20,
      positions: [Positions.DF],
    },
    {
      name: "Robin Koch",
      squadNumber: 24,
      positions: [Positions.DF],
    },
    {
      name: "Christian Günter",
      squadNumber: 26,
      positions: [Positions.DF],
    },
    {
      name: "Joshua Kimmich",
      squadNumber: 6,
      positions: [Positions.MF, Positions.DF],
    },
    {
      name: "Kai Havertz",
      squadNumber: 7,
      positions: [Positions.MF, Positions.FW],
    },
    {
      name: "Toni Kroos",
      squadNumber: 8,
      positions: [Positions.MF],
    },
    {
      name: "Jonas Hofmann",
      squadNumber: 13,
      positions: [Positions.MF],
    },
    {
      name: "Jamal Musiala",
      squadNumber: 14,
      positions: [Positions.MF],
    },
    {
      name: "Florian Neuhaus",
      squadNumber: 17,
      positions: [Positions.MF],
    },
    {
      name: "Leon Goretzka",
      squadNumber: 18,
      positions: [Positions.MF],
    },
    {
      name: "Leroy Sané",
      squadNumber: 19,
      positions: [Positions.MF, Positions.FW],
    },
    {
      name: "İlkay Gündoğan",
      squadNumber: 21,
      positions: [Positions.MF],
    },
    {
      name: "Emre Can",
      squadNumber: 23,
      positions: [Positions.MF],
    },
    {
      name: "Thomas Müller",
      squadNumber: 25,
      positions: [Positions.MF, Positions.FW],
    },
    {
      name: "Kevin Volland",
      squadNumber: 9,
      positions: [Positions.FW],
    },
    {
      name: "Serge Gnabry",
      squadNumber: 10,
      positions: [Positions.FW],
    },
    {
      name: "Timo Werner",
      squadNumber: 11,
      positions: [Positions.FW],
    },
  ],
};
