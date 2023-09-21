import { Component } from "react";

import Child from "../Child/Child";

export default class Parent extends Component {
  state = {
    teams: [
      {
        id: 1,
        imageSrc:
          "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/mercedes.png.transform/6col/image.png",
        Name: "Petronas",
        firstRacer: "lewis Hamilton",
        secondRacer: "Gorge Russel",
        firstRacerNumber: 44,
        secondRacerNumber: 63,
        Qalf: "YES",
        F1CarName: ["W", 13],
      },
      {
        id: 2,
        imageSrc:
          "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/ferrari.png.transform/6col/image.png",
        Name: "Ferrari",
        firstRacer: "Lecrel",
        secondRacer: "Sainz",
        firstRacerNumber: 16,
        secondRacerNumber: 55,
        Qalf: "NO",
        F1CarName: ["SF-", 23],
      },
      {
        id: 3,
        imageSrc:
          "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/red-bull-racing.png.transform/6col/image.png",
        Name: "RedBull",
        firstRacer: "Max Verstaben",
        secondRacer: "Checo Perez",
        firstRacerNumber: 1,
        secondRacerNumber: 11,
        Qalf: "YES",
        F1CarName: ["RB", 19],
      },
      {
        id: 4,
        imageSrc:
          "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/alphatauri.png.transform/6col/image.png",
        Name: "AlphaTauri",
        firstRacer: "Daniel Ricardo",
        secondRacer: "Yuki Tsunoda",
        firstRacerNumber: 3,
        secondRacerNumber: 22,
        Qalf: "NO",
        F1CarName: ["AT0", 4],
      },
      {
        id: 5,
        imageSrc:
          "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/aston-martin.png.transform/6col/image.png",
        Name: "Aston Martin",
        firstRacer: "Fernando Alonso",
        secondRacer: "Stroll",
        firstRacerNumber: 14,
        secondRacerNumber: 18,
        Qalf: "NO",
        F1CarName: ["AMR", 23],
      },
      {
        id: 6,
        imageSrc:
          "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/mclaren.png.transform/6col/image.png",
        Name: "Maclaren",
        firstRacer: "Norris",
        secondRacer: "Piastry",
        firstRacerNumber: 4,
        secondRacerNumber: 81,
        Qalf: "YES",
        F1CarName: ["MCL", 60],
      },
      {
        id: 7,
        imageSrc:
          "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/alpine.png.transform/6col/image.png",
        Name: "Alpine",
        firstRacer: "Ocon",
        secondRacer: "Gasly",
        firstRacerNumber: 10,
        secondRacerNumber: 31,
        Qalf: "no",
        F1CarName: ["A5", 23],
      },
      {
        id: 8,
        imageSrc:
          "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/alfa-romeo.png.transform/6col/image.png",
        Name: "AlfaRomeo",
        firstRacer: "Bottas",
        secondRacer: "Zou",
        firstRacerNumber: 77,
        secondRacerNumber: 24,
        Qalf: "NO",
        F1CarName: ["C", 43],
      },
      {
        id: 9,
        imageSrc:
          "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/williams.png.transform/6col/image.png",
        Name: "Williams",
        firstRacer: "Albon",
        secondRacer: "Sargent",
        firstRacerNumber: 23,
        secondRacerNumber: 2,
        Qalf: "NO",
        F1CarName: ["FW", 45],
      },
      {
        id: 10,
        imageSrc:
          "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/haas-f1-team.png.transform/6col/image.pngS",
        Name: "Haas",
        firstRacer: "HULKENBERG",
        secondRacer: "MAGNUSSEN",
        firstRacerNumber: 20,
        secondRacerNumber: 27,
        Qalf: "YES",
        F1CarName: ["VF-", 23],
      },
    ],
  };
  deleteTeam = (idx) => {
    // Take Deep Copy
    let FOneTeams = [...this.state.teams];
    // Filteration
    FOneTeams = FOneTeams.filter((teamOne) => teamOne.id !== idx);
    // Another Function Emplement
    //  FOneTeams.splice(FOneTeams, 1);
    // Update, Setstate()
    this.setState({ teams: FOneTeams });
  };
  updateTeam = (idx) => {
    // Take Deep Copy
    let FOneTeams = [...this.state.teams];
    // Filteration
    FOneTeams[idx - 1].F1CarName[1]++;
    // Another Function Emplement
    //  FOneTeams.splice(FOneTeams, 1);
    // Update, Setstate()
    this.setState({ team: FOneTeams });
  };

  render() {
    return (
      <>
        <div className="container-fuield bg-dark p-2 overflow-x-hidden h-100 text-nowrap">
          <div className="row gy-s2 ">
            {this.state.teams.map((team, idx) => (
              <Child
                key={idx}
                teamInfo={team}
                Delete={this.deleteTeam}
                Update={this.updateTeam}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
