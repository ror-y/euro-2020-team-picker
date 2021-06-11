import { Positions, TeamFromWiki } from "../../types";

export const russia: TeamFromWiki = {
  name: "Russia",
  flagCode: "RU",
  colors: {
    shirtMainColor: "rgb(229, 42, 43)",
    shirtNumberColor: "rgb(255, 255, 255)",
    shirtRimColor: "rgb(29, 114, 188)",
    titleColor: "rgb(229, 42, 43)",
  },
  players: [
    { name: "Anton Shunin", squadNumber: 1, positions: [Positions.GK] },
    { name: "Yury Dyupin", squadNumber: 12, positions: [Positions.GK] },
    { name: "Matvei Safonov", squadNumber: 16, positions: [Positions.GK] },
    { name: "Mário Fernandes", squadNumber: 2, positions: [Positions.DF] },
    { name: "Igor Diveyev", squadNumber: 3, positions: [Positions.DF] },
    { name: "Vyacheslav Karavayev", squadNumber: 4, positions: [Positions.DF] },
    { name: "Andrei Semyonov", squadNumber: 5, positions: [Positions.DF] },
    { name: "Fyodor Kudryashov", squadNumber: 13, positions: [Positions.DF] },
    { name: "Georgi Dzhikiya", squadNumber: 14, positions: [Positions.DF] },
    { name: "Yuri Zhirkov", squadNumber: 18, positions: [Positions.DF] },
    { name: "Roman Yevgenyev", squadNumber: 24, positions: [Positions.DF] },
    { name: "Denis Cheryshev", squadNumber: 6, positions: [Positions.MF] },
    { name: "Magomed Ozdoyev", squadNumber: 7, positions: [Positions.MF] },
    { name: "Dmitri Barinov", squadNumber: 8, positions: [Positions.MF] },
    { name: "Roman Zobnin", squadNumber: 11, positions: [Positions.MF] },
    { name: "Aleksei Miranchuk", squadNumber: 15, positions: [Positions.MF] },
    { name: "Aleksandr Golovin", squadNumber: 17, positions: [Positions.MF] },
    { name: "Rifat Zhemaletdinov", squadNumber: 19, positions: [Positions.MF] },
    { name: "Aleksei Ionov", squadNumber: 20, positions: [Positions.MF] },
    { name: "Daniil Fomin", squadNumber: 21, positions: [Positions.MF] },
    { name: "Daler Kuzyayev", squadNumber: 23, positions: [Positions.MF] },
    { name: "Denis Makarov", squadNumber: 25, positions: [Positions.MF] },
    { name: "Maksim Mukhin", squadNumber: 26, positions: [Positions.MF] },
    { name: "Aleksandr Sobolev", squadNumber: 9, positions: [Positions.FW] },
    { name: "Anton Zabolotny", squadNumber: 10, positions: [Positions.FW] },
    {
      name: "Artem Dzyuba",
      squadNumber: 22,
      positions: [Positions.FW],
    },
  ],
};
