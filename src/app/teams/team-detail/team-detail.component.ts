import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.scss'
})
export class TeamDetailComponent implements OnInit{


    team: any;
teams = [
  {
    id: 1,
    name: 'Hawks',
    city: 'Atlanta',
    color: '#E03A3E',
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/24/Atlanta_Hawks_logo.svg'
  },
  {
    id: 2,
    name: 'Celtics',
    city: 'Boston',
    color: '#007A33',
    logo: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg'
  },
  {
    id: 3,
    name: 'Nets',
    city: 'Brooklyn',
    color: '#000000',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg'
  },
  {
    id: 4,
    name: 'Hornets',
    city: 'Charlotte',
    color: '#1D1160',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg'
  },
  {
    id: 5,
    name: 'Bulls',
    city: 'Chicago',
    color: '#CE1141',
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg'
  },
{
  id: 6,
  name: 'Cavaliers',
  city: 'Cleveland',
  color: '#860038',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cleveland_Cavaliers_secondary_logo.svg/1200px-Cleveland_Cavaliers_secondary_logo.svg.png'
}

,
  {
    id: 7,
    name: 'Mavericks',
    city: 'Dallas',
    color: '#00538C',
    logo: 'https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg'
  },
  {
    id: 8,
    name: 'Nuggets',
    city: 'Denver',
    color: '#0E2240',
    logo: 'https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg'
  },
  {
    id: 9,
    name: 'Pistons',
    city: 'Detroit',
    color: '#C8102E',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Logo_of_the_Detroit_Pistons.svg/3840px-Logo_of_the_Detroit_Pistons.svg.png'
  },
  {
    id: 10,
    name: 'Warriors',
    city: 'Golden State',
    color: '#1D428A',
    logo: 'https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg'
  },
  {
    id: 11,
    name: 'Rockets',
    city: 'Houston',
    color: '#061922 ',
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg'
  },
  {
    id: 12,
    name: 'Pacers',
    city: 'Indiana',
    color: '#002D62',
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Indiana_Pacers.svg'
  },
{
  id: 13,
   name: 'Clippers',
    city: 'Los Angeles',
  logo: 'https://logos-world.net/wp-content/uploads/2020/05/Los-Angeles-Clippers-Logo.png',
      color: '#006BB8',
  conference: 'West'
}
,
  {
    id: 14,
    name: 'Lakers',
    city: 'Los Angeles',
    color: '#552583',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg'
  },
  {
    id: 15,
    name: 'Grizzlies',
    city: 'Memphis',
    color: '#5D76A9',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Memphis_Grizzlies.svg'
  },
  {
    id: 16,
    name: 'Heat',
    city: 'Miami',
    color: '#98002E',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg'
  },
  {
    id: 17,
    name: 'Bucks',
    city: 'Milwaukee',
    color: '#00471B',
    logo: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg'
  },
  {
    id: 18,
    name: 'Timberwolves',
    city: 'Minnesota',
    color: '#0C2340',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Minnesota_Timberwolves_logo.svg'
  },
  {
    id: 19,
    name: 'Pelicans',
    city: 'New Orleans',
    color: '#85714D',
    logo: 'https://upload.wikimedia.org/wikipedia/en/0/0d/New_Orleans_Pelicans_logo.svg'
  },
  {
    id: 20,
    name: 'Knicks',
    city: 'New York',
    color: '#006BB6',
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Knicks_logo.svg'
  },
  {
    id: 21,
    name: 'Thunder',
    city: 'Oklahoma City',
    color: '#007AC1',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg'
  },
  {
    id: 22,
    name: 'Magic',
    city: 'Orlando',
    color: '#0077C0',
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/10/Orlando_Magic_logo.svg'
  },
  {
    id: 23,
    name: '76ers',
    city: 'Philadelphia',
    color: '#006BB6',
    logo: 'https://upload.wikimedia.org/wikipedia/en/0/0e/Philadelphia_76ers_logo.svg'
  },
  {
    id: 24,
    name: 'Suns',
    city: 'Phoenix',
    color: '#1D1160',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Phoenix_Suns_logo.svg'
  },
  {
    id: 25,
    name: 'Trail Blazers',
    city: 'Portland',
    color: '#E03A3E',
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/21/Portland_Trail_Blazers_logo.svg'
  },
  {
    id: 26,
    name: 'Kings',
    city: 'Sacramento',
    color: '#5A2D81',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/c7/SacramentoKings.svg'
  },
  {
    id: 27,
    name: 'Spurs',
    city: 'San Antonio',
    color: '#000000',
    logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/a/a2/San_Antonio_Spurs.svg/2560px-San_Antonio_Spurs.svg.png'
  },
  {
    id: 28,
    name: 'Raptors',
    city: 'Toronto',
    color: '#CE1141',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/36/Toronto_Raptors_logo.svg'
  },
  {
    id: 29,
    name: 'Jazz',
    city: 'Utah',
    color: '#002B5C',
    logo: 'https://upload.wikimedia.org/wikipedia/it/thumb/0/04/Utah_Jazz_logo_%282016%29.svg/3840px-Utah_Jazz_logo_%282016%29.svg.png'
  },
  {
    id: 30,
    name: 'Wizards',
    city: 'Washington',
    color: '#002B5C',
    logo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Washington_Wizards_logo.svg'
  }
];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.team = this.teams.find(t => t.id === id);

    console.log('ID:', id);
    console.log('TEAM FOUND:', this.team);
  }
}
