import { lighten } from "@material-ui/core/styles";

/**
 * Utility function for returning a list of objects associated with an
 * array of values
 * @param {array} associations array of association values
 * @param {array} data array of objects to compare
 * @param {string} assocField field name that contains the associations
 */
export const getAssociations = (associations, data, assocField) => {
  return data.filter(d => {
    if (typeof d[assocField] !== "object") {
      return associations.includes(d[assocField]);
    }
    return d[assocField].filter(dd => associations.includes(dd)).length > 0;
  });
};

/**
 * This function is used to return a unique list of values present
 * for a specified key in an array of objects
 * @param {array} data array of objects to parse
 * @param {string} field property name to return unique values for
 */
export const unique = (data, field) => [...new Set(data.map(d => d[field]))];

/**
 * Utility function used for a descending sort
 * @param {*} a
 * @param {*} b
 * @param {*} orderBy
 */
export const desc = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

/**
 * Utility function used to sort data
 * @param {*} array
 * @param {*} cmp
 */
export const stableSort = (array, cmp) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
};

/**
 * Utility function used to return the current sort
 * @param {*} order
 * @param {*} orderBy
 */
export const getSorting = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
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

/**
 * Utility function for subtracting days from a date
 * Defaults to subtracting 30 days from today
 * @param {*} date
 * @param {*} days
 */
export const subtractDays = (date, days = 30) => {
  return new Date(date.setDate(date.getDate() - days));
};

/**
 * Utility function for calculating a start date based on an
 * end date and # of days
 * @param {*} days
 * @param {*} day s
 */
export const calculateStartDate = (days, date = new Date()) => {
  const initDate = new Date(`${date} 00:00:00`) || new Date();
  return extractDate(
    subtractDays(initDate, days).toLocaleString("en-US", {
      timeZone: "America/Denver"
    })
  );
};

/**
 * Function used to determine if a users active selections
 * should be cleared based on if a selection in a parent
 * has been removed
 *
 * i.e. There are two dropdowns, the options in the second dropdown
 * are tied to the first dropdown. If the user removes a selection from
 * the first dropdown, any selections that the user has that are tied to
 * the removed value from the first dropdown should be cleared
 *
 * @param {object} config configuration options
 * @param {array} config.previousParentSelections previsouly active selections for parent
 * @param {array} config.newParentSelections new selections for parent
 * @param {array} config.childData array of data associated with the child
 * @param {array} config.previousChildSelections current selections for child
 * @param {string} config.assocField name of the field containing the parent associations
 * @param {string} config.valueField name of the field containing the child values
 */
export const validateDependentSelections = ({
  previousParentSelections,
  newParentSelections,
  childData,
  previousChildSelections,
  assocField,
  valueField
}) => {
  // checks if a selection has been removed
  if (previousParentSelections.length > newParentSelections.length) {
    // get a list of values that match the users new selections
    const filteredSelections = childData
      .filter(d => {
        return (
          d[assocField].filter(dd => newParentSelections.includes(dd)).length >
          0
        );
      })
      .map(d => d[valueField]);

    return previousChildSelections.filter(d => filteredSelections.includes(d));
  }
  return previousChildSelections;
};

/**
 * Utility function used to programatically navigate to a new route
 * @param {object} history React Router history
 * @param {string} route path to navigate to
 */
export const goTo = (history, route) => {
  history.push(`/${route}`);
};

/**
 * Utility function used to set the appropriate color
 * for a Material UI form input
 * @param {Enumerator} color enum "primary", "secondary", "info", "error"
 * @param {object} theme Material UI theme
 * @param {number} lightenFactor factor to lighten color by
 */
export const setInputColor = (color, theme, lightenFactor) => {
  const validColorOptions = ["primary", "secondary", "info", "error"];
  if (validColorOptions.includes(color)) {
    if (lightenFactor) {
      return lighten(theme.palette[color].main, lightenFactor);
    }
    return theme.palette[color].main;
  }
  return null;
};

/**
 * Utility function used to assign the proper
 * class based on the variant
 * @param {string} variant i.e. standard, outlined, filled
 */
export const setClass = (classes, variant, classSuffix = "TextField") => {
  if (variant === "outlined") {
    return classes[`outlined${classSuffix}`];
  } else if (variant === "filled") {
    return classes[`filled${classSuffix}`];
  } else {
    return classes[classSuffix];
  }
};

/**
 * Utility function used to return the appropriate width
 * for a form element
 * @param {number} width
 * @param {boolean} fullWidth
 */
export const setWidth = (width, fullWidth) => {
  if (fullWidth) {
    return "100%";
  } else if (width) {
    return width;
  } else {
    ("inherit");
  }
};
