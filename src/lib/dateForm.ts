const YYYYMMDD = (date: Date) => date.toISOString().split('T')[0];

const koreanDateString = (date: Date) =>
  date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export { YYYYMMDD, koreanDateString };
