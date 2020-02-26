/**
 * Utility function used to generate crosstabbed data with nulls
 * @param {number} count number of records to generate
 */
export const generateCrosstabbedDailyDataWithNulls = count => {
  const Measurements = [
    "West Stage (ft)",
    "Oster Stage (ft)",
    "FIDCO Stage (ft)",
    "West Flow (CFS)",
    "Oster Flow (CFS)",
    "FIDCO Flow (CFS)"
  ];

  const baseDate = new Date();

  const records = Array.apply(null, Array(count)).map((d, i) => {
    let record = {
      Date: new Date(baseDate.setDate(baseDate.getDate() - 1))
    };
    Measurements.forEach(m => {
      record[m] =
        i > count - count * 0.25 ? null : +(Math.random() * 6).toFixed(2);
    });
    return record;
  });
  return records;
};

/**
 * Utility method for extracting the date in "YYYY-MM-DD" format
 * Ideal for extracting the date for a Material-UI date picker
 * @param {*} date
 */
export const extractDate = date => {
  if (date) {
    const properDate = new Date(date);
    const year = properDate.getFullYear();
    const month =
      properDate.getMonth() + 1 < 10
        ? `0${properDate.getMonth() + 1}`
        : properDate.getMonth() + 1;
    const day =
      properDate.getDate() < 10
        ? `0${properDate.getDate()}`
        : properDate.getDate();
    return `${year}-${month}-${day}`;
  }
  return "";
};
