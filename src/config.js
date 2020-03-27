import cumulativeUSCases from './data/total_us_cases';

const config = {
  appTitle: 'COVID-19 Cases in the U.S.',
  startDate: '2020-01-21',
  lastUpdate: cumulativeUSCases[cumulativeUSCases.length - 1].date,
  currentDayCount: parseInt(
    cumulativeUSCases[cumulativeUSCases.length - 1].day_count
  ),
};

export default config;
