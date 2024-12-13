export const steps = [
  {
    id: 0,
    title: "Старт",
    time: 0,
  },
  {
    id: 1,
    title: "2 часа",
    time: 2 * 60 * 60 * 1000,
  },
  {
    id: 2,
    title: "12 часов",
    time: 12 * 60 * 60 * 1000,
  },
  {
    id: 3,
    title: "1 день",
    time: 1 * 24 * 60 * 60 * 1000,
  },

  {
    id: 4,
    title: "3 дня",
    time: 3 * 24 * 60 * 60 * 1000,
  },
  {
    id: 5,
    title: "7 дней",
    time: 7 * 24 * 60 * 60 * 1000,
  },
  {
    id: 6,
    title: "10 дней",
    time: 10 * 24 * 60 * 60 * 1000,
  },
  {
    id: 7,
    title: "14 дней",
    time: 14 * 24 * 60 * 60 * 1000,
  },

  {
    id: 8,
    title: "21 день",
    time: 21 * 24 * 60 * 60 * 1000,
  },
  {
    id: 9,
    title: "30 дней",
    time: 30 * 24 * 60 * 60 * 1000,
  },
  {
    id: 10,
    title: "40 дней",
    time: 40 * 24 * 60 * 60 * 1000,
  },
  {
    id: 11,
    title: "50 дней",
    time: 50 * 24 * 60 * 60 * 1000,
  },
  {
    id: 12,
    title: "60 дней",
    time: 60 * 24 * 60 * 60 * 1000,
  },
  {
    id: 13,
    title: "75 дней",
    time: 75 * 24 * 60 * 60 * 1000,
  },
  {
    id: 14,
    title: "90 дней",
    time: 90 * 24 * 60 * 60 * 1000,
  }
];

export const navigationTypes = [
  {
    id: 1,
    name: "statistics",
    link: "",
    title: "Статистика",
  },
  {
    id: 2,
    name: "achievements",
    link: "/achievements",
    title: "Достижения",
  },
  {
    id: 3,
    name: "blog",
    link: "/blog",
    title: "Блог",
  },
];

export const formatTime = (time) => {
  const seconds = time % 60;
  const minutes = Math.floor((time / 60) % 60);
  const hours = Math.floor((time / 60 / 60) % 24);
  const days = Math.floor(time / 60 / 60 / 24);
  if (minutes === 0 && hours === 0 && days === 0) {
    return `${seconds} сек`;
  }
  if (hours === 0 && days === 0 && minutes !== 0) {
    return `${minutes} мин ${seconds} сек`;
  }
  if (days === 0 && hours >= 2 && minutes !== 0) {
    return `${hours} час ${minutes} мин`;
  }
  if (days === 0 && hours !== 0 && minutes !== 0) {
    return `${hours} ч ${minutes} мин ${seconds} сек`;
  }
  if (days >= 30 && hours !== 0 && minutes !== 0) {
    return `${days} д`;
  }
  if (days >= 7 && hours !== 0 && minutes !== 0) {
    return `${days} д ${hours} ч`;
  }
  if (days !== 0 && hours !== 0 && minutes !== 0) {
    return `${days} д ${hours} ч ${minutes} мин`;
  }
};