const { differenceInCalendarDays } = require("date-fns");

const getSubmissionDates = (calendar) => {
  return Object.keys(calendar)
    .map((timestamp) => new Date(Number(timestamp) * 1000))
    .sort((a, b) => a - b);
};

const getCurrentStreak = (dates) => {
  if (dates.length === 0) {
    return 0;
  }

  dates.forEach((date) => date.setHours(0, 0, 0, 0));

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const lastSubmission = dates[dates.length - 1];

  let currentDate;

  if (differenceInCalendarDays(today, lastSubmission) === 0) {
    currentDate = today;
  } else if (differenceInCalendarDays(yesterday, lastSubmission) === 0) {
    currentDate = yesterday;
  } else {
    return 0;
  }

  let streak = 0;

  for (let i = dates.length - 1; i >= 0; i--) {
    const diff = differenceInCalendarDays(currentDate, dates[i]);

    if (diff === streak) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
};

const getLongestStreak = (dates) => {
  if (dates.length === 0) {
    return 0;
  }

  let longest = 1;
  let current = 1;

  for (let i = 1; i < dates.length; i++) {
    const diff = differenceInCalendarDays(dates[i], dates[i - 1]);

    if (diff === 1) {
      current++;
      longest = Math.max(longest, current);
    } else {
      current = 1;
    }
  }

  return longest;
};

const getTotalSubmissions = (calendar) => {
  return Object.values(calendar).reduce((sum, count) => sum + count, 0);
};

const getActiveDays = (calendar) => {
  return Object.keys(calendar).length;
};

module.exports = {
  getSubmissionDates,
  getCurrentStreak,
  getLongestStreak,
  getTotalSubmissions,
  getActiveDays,
};
