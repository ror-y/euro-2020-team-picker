import { Positions, TeamFromWiki } from "../../types";

export const netherlands: TeamFromWiki = {
  name: "Netherlands",
  flagCode: "NL",
  colors: {
    shirtMainColor: "rgb(233, 105, 46)",
    shirtNumberColor: "rgb(255, 255, 255)",
    shirtRimColor: "rgb(0, 0, 0)",
    titleColor: "rgb(233, 105, 46)",
  },
  players: [
    { name: "Maarten Stekelenburg", squadNumber: 1, positions: [Positions.GK] },
    { name: "Tim Krul", squadNumber: 13, positions: [Positions.GK] },
    { name: "Marco Bizot", squadNumber: 23, positions: [Positions.GK] },
    { name: "Joël Veltman", squadNumber: 2, positions: [Positions.DF] },
    {
      name: "Matthijs de Ligt",
      squadNumber: 3,
      positions: [Positions.DF],
      displayName: "de Ligt",
    },
    { name: "Nathan Aké", squadNumber: 4, positions: [Positions.DF] },
    { name: "Owen Wijndal", squadNumber: 5, positions: [Positions.DF] },
    {
      name: "Stefan de Vrij",
      squadNumber: 6,
      positions: [Positions.DF],
      displayName: "de Vrij",
    },
    {
      name: "Patrick van Aanholt",
      squadNumber: 12,
      positions: [Positions.DF],
      displayName: "van Aanholt",
    },
    { name: "Daley Blind", squadNumber: 17, positions: [Positions.DF] },
    { name: "Denzel Dumfries", squadNumber: 22, positions: [Positions.DF] },
    { name: "Jurriën Timber", squadNumber: 25, positions: [Positions.DF] },
    {
      name: "Georginio Wijnaldum",
      squadNumber: 8,
      positions: [Positions.MF],
    },
    { name: "Davy Klaassen", squadNumber: 14, positions: [Positions.MF] },
    {
      name: "Marten de Roon",
      squadNumber: 15,
      positions: [Positions.MF],
      displayName: "de Roon",
    },
    { name: "Ryan Gravenberch", squadNumber: 16, positions: [Positions.MF] },
    {
      name: "Frenkie de Jong",
      squadNumber: 21,
      positions: [Positions.MF],
      displayName: "F. de Jong",
    },
    { name: "Teun Koopmeiners", squadNumber: 24, positions: [Positions.MF] },
    { name: "Steven Berghuis", squadNumber: 7, positions: [Positions.FW] },
    {
      name: "Luuk de Jong",
      squadNumber: 9,
      positions: [Positions.FW],
      displayName: "L. de Jong",
    },
    { name: "Memphis Depay", squadNumber: 10, positions: [Positions.FW] },
    { name: "Quincy Promes", squadNumber: 11, positions: [Positions.FW] },
    { name: "Donyell Malen", squadNumber: 18, positions: [Positions.FW] },
    { name: "Wout Weghorst", squadNumber: 19, positions: [Positions.FW] },
    { name: "Cody Gakpo", squadNumber: 26, positions: [Positions.FW] },
  ],
};
