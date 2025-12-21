import { images } from "../../assets/images";

export const QuestionnaireCompletedData = [
    { name: 'Fragebogen abgeschlossen', id: 1, completed: true },
    { name: 'Trainingsplan wird erstellt', id: 2, completed: true },
    { name: 'Erster Termin vereinbaren', id: 3, completed: false },
    { name: 'Loslegen!', id: 4, completed: false },
  ];


 export   const joinRoomPeople = [
      { name: "Yessine (You)", id: 1, image: images.user },
      { name: "Maissen", id: 2, image: images.user2 },
      { name: "Sonia", id: 3, image: images.user3 },
      { name: "Fathi", id: 4, image: images.user4 },
      { name: "Lofti", id: 5, image: images.user5 },
    ];


  export  const HistoryData = [
  {
    title: "Let’s watch a movie this Saturday",
    text: "Room created by Yessine",
    status: "Pending",
    JoinUsers: [
      { id: 1, img: images.user },
      { id: 2, img: images.user2 },
      { id: 3, img: images.user3 },
      { id: 4, img: images.user3 },
      { id: 5, img: images.user3 },
    ],
  },
  {
    title: "Let’s watch a movie this Saturday",
    text: "Room created by Yessine",
    status: "Pending",
    JoinUsers: [
      { id: 1, img: images.user },
      { id: 2, img: images.user2 },
      { id: 3, img: images.user3 },
      { id: 4, img: images.user3 },
      { id: 5, img: images.user3 },
    ],
  },
  {
    title: "Let’s watch a movie this Saturday",
    text: "Room created by Yessine",
    status: "Launched",

    JoinUsers: [
      { id: 1, img: images.user },
      { id: 2, img: images.user2 },
      { id: 3, img: images.user3 },
      { id: 4, img: images.user3 },
      { id: 5, img: images.user3 },
    ],
  },
  {
    title: "Let’s watch a movie this Saturday",
    text: "Room created by Yessine",
    status: "Launched",
    JoinUsers: [
      { id: 1, img: images.user },
      { id: 2, img: images.user2 },
      { id: 3, img: images.user3 },
      { id: 4, img: images.user3 },
      { id: 5, img: images.user3 },
    ],
  },
  {
    title: "Let’s watch a movie this Saturday",
    text: "Room created by Yessine",
    status: "Completed",

    JoinUsers: [
      { id: 1, img: images.user },
      { id: 2, img: images.user2 },
      { id: 3, img: images.user3 },
      { id: 4, img: images.user3 },
      { id: 5, img: images.user3 },
    ],
  },
]



 export const ByCreditsData = [
    {
      id: 1,
      credits: "10 credits",
      cruncey: "€ 5.0",
    },
    {
      id: 2,
      credits: "20 credits",
      cruncey: "€ 10.0",
    },
    {
      id: 1,
      credits: "30 credits",
      cruncey: "€ 30.0",
    },
    {
      id: 1,
      credits: "50 credits",
      cruncey: "€ 45.0",
    },
    {
      id: 1,
      credits: "100 credits",
      cruncey: "€ 80.0",
    },
  ];