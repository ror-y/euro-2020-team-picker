import { Positions, TeamFromWiki } from "../../types";

export const portugal: TeamFromWiki = {
  name: "Portugal",
  flagCode: "PT",
  colors: {
    shirtMainColor: "rgb(219, 39, 35)",
    shirtNumberColor: "goldenrod",
    shirtRimColor: "green",
    titleColor: "rgb(219, 39, 35)",
  },
  players: [
    {
      name: "Rui Patrício",
      squadNumber: 1,
      positions: [Positions.GK],
    },
    { name: "Anthony Lopes", squadNumber: 12, positions: [Positions.GK] },
    { name: "Rui Silva", squadNumber: 22, positions: [Positions.GK] },
    { name: "Nélson Semedo", squadNumber: 2, positions: [Positions.DF] },
    { name: "Pepe", squadNumber: 3, positions: [Positions.DF] },
    { name: "Rúben Dias", squadNumber: 4, positions: [Positions.DF] },
    { name: "Raphaël Guerreiro", squadNumber: 5, positions: [Positions.DF] },
    { name: "José Fonte", squadNumber: 6, positions: [Positions.DF] },
    { name: "João Cancelo", squadNumber: 20, positions: [Positions.DF] },
    { name: "Nuno Mendes", squadNumber: 25, positions: [Positions.DF] },
    {
      name: "João Moutinho",
      squadNumber: 8,
      positions: [Positions.MF],
    },
    {
      name: "Bernardo Silva",
      squadNumber: 10,
      positions: [Positions.MF, Positions.FW],
    },
    { name: "Bruno Fernandes", squadNumber: 11, positions: [Positions.MF] },
    { name: "Danilo Pereira", squadNumber: 13, positions: [Positions.MF] },
    { name: "William Carvalho", squadNumber: 14, positions: [Positions.MF] },
    { name: "Rafa Silva", squadNumber: 15, positions: [Positions.MF] },
    { name: "Renato Sanches", squadNumber: 16, positions: [Positions.MF] },
    { name: "Rúben Neves", squadNumber: 18, positions: [Positions.MF] },
    { name: "Pedro Gonçalves", squadNumber: 19, positions: [Positions.MF] },
    { name: "Sérgio Oliveira", squadNumber: 24, positions: [Positions.MF] },
    { name: "João Palhinha", squadNumber: 26, positions: [Positions.MF] },
    {
      name: "Cristiano Ronaldo",
      squadNumber: 7,
      positions: [Positions.FW],
    },
    { name: "André Silva", squadNumber: 9, positions: [Positions.FW] },
    { name: "Gonçalo Guedes", squadNumber: 17, positions: [Positions.FW] },
    { name: "Diogo Jota", squadNumber: 21, positions: [Positions.FW] },
    { name: "João Félix", squadNumber: 23, positions: [Positions.FW] },
  ],
};