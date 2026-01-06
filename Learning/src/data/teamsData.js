import tigersLogo from '../assets/icons/tigers.svg'
import lionsLogo from '../assets/icons/lions.svg'
import panthersLogo from '../assets/icons/panthers.svg'
import warriorsLogo from '../assets/icons/warriors.svg'
import eaglesLogo from '../assets/icons/eagles.svg'
import knightsLogo from '../assets/icons/knights.svg'
import playerPlaceholder from '../assets/images/player-placeholder.svg'

const teams = [
  {
    id: 'tigers',
    name: 'Amazatic Gladiators',
    city: 'Capital City',
    description: 'A professional corporate-owned franchise focused on excellence and youth development.',
    colors: ['#0b5cff', '#ffd700'],
    logo: tigersLogo,
    players: [
    { id: 't1p1', name: 'Rohit Gabane', role: 'Captain', number: 7, photo: playerPlaceholder },
    { id: 't1p2', name: 'Vikas Shinde', role: 'Batter', number: 63, photo: playerPlaceholder },
    { id: 't1p3', name: 'Sanket Tikam', role: 'Batter', number: 17, photo: playerPlaceholder },
    { id: 't1p4', name: 'Ashutosh Kaushal', role: 'Batter', number: 18, photo: playerPlaceholder },
    { id: 't1p5', name: 'Suraj Nalawade', role: 'Batter', number: 45, photo: playerPlaceholder },
    { id: 't1p6', name: 'Ganesh Wadkar', role: 'Allrounder', number: 21, photo: playerPlaceholder },
    { id: 't1p7', name: 'Manish Wagh', role: 'Bowler', number: 9, photo: playerPlaceholder },
    { id: 't1p8', name: 'Mahesh Joke', role: 'Bowler', number: 11, photo: playerPlaceholder },
    { id: 't1p9', name: 'Sushant Patil', role: 'Bowler', number: 24, photo: playerPlaceholder },
    { id: 't1p10', name: 'Sagar Tank', role: 'Bowler', number: 30, photo: playerPlaceholder },
    { id: 't1p11', name: 'Ketan Bhandari', role: 'Wicketkeeper', number: 99, photo: playerPlaceholder }
    ]

  },
  {
    id: 'lions',
    name: 'Amazatic Lions',
    city: 'Metro City',
    description: 'Strong top order and a balanced bowling attack.',
    colors: ['#ff4500', '#222'],
    logo: lionsLogo,
        players: [
    { id: 't2p1', name: 'Amit Deshmukh', role: 'Captain', number: 10, photo: playerPlaceholder },
    { id: 't2p2', name: 'Rahul Patil', role: 'Batter', number: 14, photo: playerPlaceholder },
    { id: 't2p3', name: 'Nilesh More', role: 'Batter', number: 22, photo: playerPlaceholder },
    { id: 't2p4', name: 'Swapnil Jadhav', role: 'Batter', number: 33, photo: playerPlaceholder },
    { id: 't2p5', name: 'Pratik Shelar', role: 'Batter', number: 8, photo: playerPlaceholder },
    { id: 't2p6', name: 'Akshay Pawar', role: 'Allrounder', number: 19, photo: playerPlaceholder },
    { id: 't2p7', name: 'Rohit Kale', role: 'Bowler', number: 3, photo: playerPlaceholder },
    { id: 't2p8', name: 'Sandeep Patole', role: 'Bowler', number: 27, photo: playerPlaceholder },
    { id: 't2p9', name: 'Vivek Chavan', role: 'Bowler', number: 41, photo: playerPlaceholder },
    { id: 't2p10', name: 'Amol Shirsat', role: 'Bowler', number: 55, photo: playerPlaceholder },
    { id: 't2p11', name: 'Nitin Borse', role: 'Wicketkeeper', number: 1, photo: playerPlaceholder }
    ]

  },
  {
    id: 'panthers',
    name: 'Harbour Panthers',
    city: 'Harbour Bay',
    description: 'Aggressive style, excellent fielding unit.',
    colors: ['#006400', '#8fbc8f'],
    logo: panthersLogo,
    players: [
        { id: 't3p1', name: 'Sachin Kulkarni', role: 'Captain', number: 5, photo: playerPlaceholder },
        { id: 't3p2', name: 'Pranav Joshi', role: 'Batter', number: 16, photo: playerPlaceholder },
        { id: 't3p3', name: 'Harshad Mane', role: 'Batter', number: 28, photo: playerPlaceholder },
        { id: 't3p4', name: 'Yogesh Shinde', role: 'Batter', number: 44, photo: playerPlaceholder },
        { id: 't3p5', name: 'Kunal Patankar', role: 'Batter', number: 12, photo: playerPlaceholder },
        { id: 't3p6', name: 'Ritesh Sawant', role: 'Allrounder', number: 20, photo: playerPlaceholder },
        { id: 't3p7', name: 'Sameer Gite', role: 'Bowler', number: 6, photo: playerPlaceholder },
        { id: 't3p8', name: 'Nikhil Kothari', role: 'Bowler', number: 31, photo: playerPlaceholder },
        { id: 't3p9', name: 'Ajay Jadhav', role: 'Bowler', number: 48, photo: playerPlaceholder },
        { id: 't3p10', name: 'Deepak More', role: 'Bowler', number: 52, photo: playerPlaceholder },
        { id: 't3p11', name: 'Omkar Desai', role: 'Wicketkeeper', number: 77, photo: playerPlaceholder }
        ]
  },
  {
    id: 'warriors',
    name: 'Desert Warriors',
    city: 'Desert Plains',
    description: 'Tough competitors with strategic gameplay.',
    colors: ['#8b0000', '#ffd1a4'],
    logo: warriorsLogo,
    players: [
            { id: 't5p1', name: 'Kunal Deshmane', role: 'Captain', number: 9, photo: playerPlaceholder },
        { id: 't5p2', name: 'Sahil Patil', role: 'Batter', number: 19, photo: playerPlaceholder },
        { id: 't5p3', name: 'Aakash Shinde', role: 'Batter', number: 26, photo: playerPlaceholder },
        { id: 't5p4', name: 'Pravin Jagtap', role: 'Batter', number: 34, photo: playerPlaceholder },
        { id: 't5p5', name: 'Naveen Kulkarni', role: 'Batter', number: 47, photo: playerPlaceholder },
        { id: 't5p6', name: 'Mahendra Pawar', role: 'Allrounder', number: 13, photo: playerPlaceholder },
        { id: 't5p7', name: 'Ramesh Babar', role: 'Bowler', number: 4, photo: playerPlaceholder },
        { id: 't5p8', name: 'Sunil Khot', role: 'Bowler', number: 29, photo: playerPlaceholder },
        { id: 't5p9', name: 'Vishal Jadhav', role: 'Bowler', number: 38, photo: playerPlaceholder },
        { id: 't5p10', name: 'Pankaj Giri', role: 'Bowler', number: 54, photo: playerPlaceholder },
        { id: 't5p11', name: 'Akash Bhosale', role: 'Wicketkeeper', number: 90, photo: playerPlaceholder }
        ]
  },
  {

    id: 'eagles',
    name: 'Coastal Eagles',
    city: 'Coastline',
    description: 'Youth-oriented franchise with an eye for scouting.',
    colors: ['#1e90ff', '#fff'],
    logo: eaglesLogo,
    players: [
  { id: 't4p1', name: 'Aniket Patil', role: 'Captain', number: 11, photo: playerPlaceholder },
  { id: 't4p2', name: 'Rohit Kamble', role: 'Batter', number: 25, photo: playerPlaceholder },
  { id: 't4p3', name: 'Mayur Chougule', role: 'Batter', number: 32, photo: playerPlaceholder },
  { id: 't4p4', name: 'Kiran Mhatre', role: 'Batter', number: 39, photo: playerPlaceholder },
  { id: 't4p5', name: 'Tejas Pawar', role: 'Batter', number: 46, photo: playerPlaceholder },
  { id: 't4p6', name: 'Aditya Deshpande', role: 'Allrounder', number: 15, photo: playerPlaceholder },
  { id: 't4p7', name: 'Saurabh Shitole', role: 'Bowler', number: 2, photo: playerPlaceholder },
  { id: 't4p8', name: 'Abhishek Kulkarni', role: 'Bowler', number: 23, photo: playerPlaceholder },
  { id: 't4p9', name: 'Prasad Gawade', role: 'Bowler', number: 36, photo: playerPlaceholder },
  { id: 't4p10', name: 'Vijay Gaikwad', role: 'Bowler', number: 50, photo: playerPlaceholder },
  { id: 't4p11', name: 'Shubham Patole', role: 'Wicketkeeper', number: 88, photo: playerPlaceholder }

]
  },
  {
    id: 'knights',
    name: 'Valley Knights',
    city: 'Valley View',
    description: 'Corporate-backed team focusing on sustainability and community.',
    colors: ['#4b0082', '#f0e68c'],
    logo: knightsLogo,
   players: [
  { id: 't6p1', name: 'Saurabh Patil', role: 'Captain', number: 6, photo: playerPlaceholder },
  { id: 't6p2', name: 'Nitin Jadhav', role: 'Batter', number: 20, photo: playerPlaceholder },
  { id: 't6p3', name: 'Amar Shinde', role: 'Batter', number: 27, photo: playerPlaceholder },
  { id: 't6p4', name: 'Rohit Bhandari', role: 'Batter', number: 35, photo: playerPlaceholder },
  { id: 't6p5', name: 'Swapnil Pawar', role: 'Batter', number: 42, photo: playerPlaceholder },
  { id: 't6p6', name: 'Vishwas More', role: 'Allrounder', number: 16, photo: playerPlaceholder },
  { id: 't6p7', name: 'Santosh Kale', role: 'Bowler', number: 8, photo: playerPlaceholder },
  { id: 't6p8', name: 'Rupesh Chavan', role: 'Bowler', number: 28, photo: playerPlaceholder },
  { id: 't6p9', name: 'Kishor Patil', role: 'Bowler', number: 37, photo: playerPlaceholder },
  { id: 't6p10', name: 'Dinesh More', role: 'Bowler', number: 51, photo: playerPlaceholder },
  { id: 't6p11', name: 'Hemant Kulkarni', role: 'Wicketkeeper', number: 100, photo: playerPlaceholder }

  ]
  }
];

export default teams;
