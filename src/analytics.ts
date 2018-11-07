/**
 * Copyright(c) 2018
 *
 * @summary hello.ts
 * @author Taketo Yoshida
 */

const dateFormat = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${date.getFullYear()}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
};

function notifyGAReportToSlack() {
  try {
    const now = new Date();
    const aWeekAgo = new Date();
    aWeekAgo.setDate(aWeekAgo.getDate() - 7);

    const report = Analytics.Data.Ga.get(
      'ga:178516551',
      dateFormat(aWeekAgo),
      dateFormat(now),
      'ga:pageviews',
      {
        dimensions: 'ga:yearMonth,ga:date',
        samplingLevel: 'DEFAULT',
        sort: 'ga:date'
      }
    );

    if (report.rows.length === 0) {
      return;
    }

    // Append the headers.
    const headers = report.columnHeaders.map((columnHeader: any) => {
      return columnHeader.name;
    });

    const data = report.rows.map((row: [string]) => {
      return {
        date: row[1],
        pageviews: row[2]
      };
    });

    Logger.log(headers);
    Logger.log(data);

  } catch (e) {
     Logger.log(`fail to get analytics data. Reason: ${e.message}`);
  }
}
