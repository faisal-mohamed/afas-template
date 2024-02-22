import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import { capitalize, cloneDeep, isEmpty, lowerCase } from "lodash";
import moment from "moment";
import { FindingsDataContent, findings } from "../types/dashboardTypes";
import "moment-timezone";
import { clousecFeatures, reactSelectOptions } from "./constants";
import { jwtDecode } from "jwt-decode";

const initialStartDate = moment().subtract(30, "day");
const initialEndDate = moment();

export function getSeverity(severity: string) {
  switch (severity) {
    case "CRITICAL":
      return (
        <label className="custom-radio table-label">
          <div className={`${lowerCase(severity)}`}></div>
          <div className="radio-label">{capitalize(severity)} </div>
        </label>
      );
    case "MEDIUM":
      return (
        <label className="custom-radio table-label">
          <div className={`${lowerCase(severity)}`}></div>
          <div className="radio-label">{capitalize(severity)} </div>
        </label>
      );
    case "LOW":
      return (
        <label className="custom-radio table-label">
          <div className={`${lowerCase(severity)}`}></div>
          <div className="radio-label">{capitalize(severity)} </div>
        </label>
      );
    case "HIGH":
      return (
        <label className="custom-radio table-label">
          <div className={`${lowerCase(severity)}`}></div>
          <div className="radio-label">{capitalize(severity)} </div>
        </label>
      );
    case "UNTRIAGED":
      return (
        <label className="custom-radio table-label">
          <div className={`${lowerCase(severity)}`}></div>
          <div className="radio-label">{capitalize(severity)} </div>
        </label>
      );
    default:
  }
}

export const isFetchBaseQueryError = (
  error: any
): error is FetchBaseQueryError => {
  if (error.error.status === 201) {
    return false;
  }
  return (
    error && error.error.status !== undefined && error.error.status !== 200
  );
};

export const calculatePerc = (dividend: number, divisor: number) => {
  const percentage = (dividend / divisor) * 100;
  return 1 > percentage && percentage > 0 ? "<1" : Math.round(percentage);
};

export const getDefaultSelectedDate = () => ({
  initialStartDate,
  initialEndDate,
});

export const labelFormatter = (
  array: any,
  parameter: string,
  value: string,
  valueFromString?: boolean
) => {
  if (valueFromString) {
    return !isEmpty(array)
      ? array.map((data: any) => ({ label: data, value: data }))
      : [];
  }
  return !isEmpty(array)
    ? array.map((data: any) => ({
        label: data[parameter],
        value: data[value],
      }))
    : [];
};

export const spliceArray = (arr: any[], accessor: string, matchField: any) => {
  const indexToRemove = arr.findIndex((item) => item[accessor] === matchField);

  if (indexToRemove !== -1) {
    arr.splice(indexToRemove, 1);
  }
  return arr;
};

export const generateExpirayLabel = (date: any) => [
  {
    label: "15 days",
    value: moment(date).add(15, "days").format("YYYY-MM-DD"),
  },
  {
    label: "30 days",
    value: moment(date).add(30, "days").format("YYYY-MM-DD"),
  },
  {
    label: "60 days",
    value: moment(date).add(60, "days").format("YYYY-MM-DD"),
  },
  {
    label: "90 days",
    value: moment(date).add(90, "days").format("YYYY-MM-DD"),
  },
];

export function getValueByResourceName(
  resourceData: any,
  resourceName: string
) {
  if (!isEmpty(resourceData)) {
    const data = resourceData
      .map(JSON.parse)
      .find((data: { resourceType: string | string[] }) =>
        data.resourceType.includes(resourceName)
      );
    return !isEmpty(data) ? data["COUNT(*)"] : 0;
  }
  return 0;
}

export function hasTopLevelDomain(url: string) {
  const regex = /\.([a-z]{2,})$/i;
  return regex.test(url);
}

export function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function removeDuplicatesFromArray(
  array: any[],
  uniqueProperty: string
) {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }

  const uniqueData = Array.from(
    new Set(array.map((item) => item[uniqueProperty]))
  ).map((id) => {
    return array.find((item) => item[uniqueProperty] === id);
  });
  return uniqueData;
}

export function convertRelativeTime(date: string) {
  const targetDateInSingapore = moment.tz(date, "Asia/Singapore");

  const targetDateInLocalTime = targetDateInSingapore
    .clone()
    .tz(moment.tz.guess());

  const relativeTime = targetDateInLocalTime.fromNow();

  return relativeTime;
}

export const getReactSelectedOptions = (
  options: reactSelectOptions[],
  matchValues: string[] | number[]
) => {
  const selectedOptions: reactSelectOptions[] = [];
  !isEmpty(matchValues) &&
    !isEmpty(options) &&
    matchValues.forEach((value) => {
      options.forEach((data) => {
        if (data.value === value) {
          selectedOptions.push(data);
        }
      });
    });

  return selectedOptions;
};

export const mapDataWithAccountNames = (
  data: any,
  listOfAccounts: reactSelectOptions[],
  accessor: any
) => {
  if (isEmpty(data)) {
    return [];
  } else if (isEmpty(listOfAccounts) && !isEmpty(data)) {
    return data.map((dataItem: any) => ({
      ...dataItem,
      accountName: dataItem[accessor],
    }));
  }
  return data.map((dataItem: any) => {
    const account = listOfAccounts.find(
      (account) => account.value === dataItem[accessor]
    );
    return {
      ...dataItem,
      accountName: account?.label,
    };
  });
};

export function sortByProperty(
  array: any[],
  property: string,
  sortOrder: "asc" | "desc" = "asc"
): any[] {
  if (!array) return [];

  return array.slice().sort((a, b) => {
    const valueA = a[property];
    const valueB = b[property];

    if (typeof valueA === "number" && typeof valueB === "number") {
      return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
    } else {
      // If types are different or not numbers, compare as strings
      const stringA = String(valueA);
      const stringB = String(valueB);
      return sortOrder === "asc"
        ? stringA.localeCompare(stringB)
        : stringB.localeCompare(stringA);
    }
  });
}

export const convertFindingsGraphData = (data: FindingsDataContent[]) => {
  if (!isEmpty(data)) {
    return {
      seriesData: data.map((content) => content.recordCount),
      xAxisData: data.map((content) =>
        moment(content.createdDate).format("DD/MM/YY")
      ),
    };
  }

  return {
    seriesData: [],
    xAxisData: [],
  };
};

interface UserObject {
  sub: string;
  roleCode: string;
  roleName: string;
  groups: string[];
  exp: number;
  userId: string;
  iat: number;
  features_access: FeatureAccess[];
}

interface FeatureAccess {
  accessType: string;
  featureCode: string;
  featureName: string;
}
export const createUserFeaturesAccess = (
  token: string,
  userFeatureAccess: any
) => {
  if (!isEmpty(userFeatureAccess) && token) {
    const decryptedUserData = jwtDecode(token) as UserObject;

    const ClonedUserFeatureAccess = cloneDeep(userFeatureAccess);

    clousecFeatures.forEach((featureName) => {
      const { features_access } = decryptedUserData;

      features_access.forEach((features) => {
        if (features.featureName === featureName) {
          ClonedUserFeatureAccess[featureName] = features.accessType;
        }
      });
    });

    sessionStorage.setItem(
      "cs_features",
      JSON.stringify(ClonedUserFeatureAccess)
    );

    return ClonedUserFeatureAccess;
  }
};

export function getUserFeaturesFromStorage() {
  const features = sessionStorage.getItem("cs_features");

  if (!features) {
    return {};
  }

  return JSON.parse(features);
}

export function calculateDaysUntilRenewal(expiryTimestamp: string) {
  const expiryDate = moment(expiryTimestamp);

  const currentDate = moment();

  const daysRemaining = expiryDate.diff(currentDate, "days");

  if (daysRemaining > 0) {
    return daysRemaining;
  } else {
    return "Expired";
  }
}

export const createTopAccountsArray = (
  sortedAccounts: any,
  accessor: string
) => {
  if (!isEmpty(sortedAccounts)) {
    const topAccounts = sortedAccounts
      .slice(0, 5)
      .map((account: any, index: number) => ({
        ...account,
        rank: index + 1,
      }));

    while (topAccounts.length < 5) {
      topAccounts.push({
        rank: topAccounts.length + 1,
        // [accessor]: "N/A",
        accountName: "N/A",
        count: "N/A",
      });
    }

    return topAccounts;
  }

  return [];
};

export const getConfigAggregatorName = () =>
  sessionStorage.getItem("config-aggregatorName");

export const checkIsSingleAccount = () =>
  !sessionStorage.getItem("config-aggregatorName");

export const getTableCheckedStatus = (
  selectedDataLength: any,
  allDataLength: any
) => {
  if (allDataLength === 0) return false;
  else if (selectedDataLength === allDataLength) return true;
  else if (selectedDataLength === 0) return false;
  else return false;
};

interface Templates {
  [key: string]: (name: string, value: string | number) => string;
}

export const generateChartsLegend = (
  data: { name: string; value: number }[],
  name: string,
  findTotal?: boolean
) => {
  if (isEmpty(data)) {
    return "";
  }

  const matchedData = data.find((item) => item.name === name);

  if (matchedData) {
    const templates: Templates = {
      Security: (name: string, value: number | string) =>
        `${name}                           {value|${value}}`,
      Network: (name: string, value: number | string) =>
        `${name}                            {value|${value}}`,
      Storage: (name: string, value: number | string) =>
        `${name}                             {value|${value}}`,
      Compute: (name: string, value: number | string) =>
        `${name}                           {value|${value}}`,
      Db: (name: string, value: number | string) =>
        `${name}                                       {value|${value}}`,
      Containers: (name: string, value: number | string) =>
        `${name}                         {value|${value}}`,
      "Non-Compliant": (name: string, value: number | string) =>
        `${name}     {value|${value}}`,
      Compliant: (name: string, value: number | string) =>
        `${name}              {value|${value}}`,
      "Cost Optimizing": (name: string, value: number | string) =>
        `${name}              {value|${value}}`,
      "Operational Excellence": (name: string, value: number | string) =>
        `${name}  {value|${value}}`,
      "Service Limits": (name: string, value: number | string) =>
        `${name}                 {value|${value}}`,
      Performance: (name: string, value: number | string) =>
        `${name}                   {value|${value}}`,
      "Fault Tolerance": (name: string, value: number | string) =>
        `${name}               {value|${value}}`,
      [findings.CRITICAL]: (name: string, value: number | string) =>
        `${name}             {value|${value}} `,
      [findings.HIGH]: (name: string, value: number | string) =>
        `${name}                 {value|${value}} `,
      [findings.MEDIUM]: (name: string, value: number | string) =>
        `${name}           {value|${value}} `,
      [findings.LOW]: (name: string, value: number | string) =>
        `${name}                   {value|${value}} `,
      [findings.UNTRIAGED]: (name: string, value: number | string) =>
        `${name}         {value|${value}} `,
      upcoming: (name: string, value: number | string) =>
        `${name}          {value|${value}} `,
      closed: (name: string, value: number | string) =>
        `${name}                {value|${value}} `,
      open: (name: string, value: number | string) =>
        `${name}                {value|${value}} `,
    };
    const { name, value } = matchedData;

    if (findTotal) {
      const totalCount = reduceArray(data, "value");
      const percentage = calculatePerc(value, totalCount);
      const percent =
        percentage.toLocaleString().length === 1
          ? ` ${percentage}%`
          : `${percentage}%`;

      return templates[name](name, percent);
    }

    return templates[name](name, value);
  }
};

export const reduceArray = (array: any[], accessor: string) => {
  if (isEmpty(array)) {
    return 0;
  }

  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue[accessor],
    0
  );
};

export function extractLambdaFunctionName(lambdaArn: string) {
  const lambdaArnPattern =
    /^arn:aws:lambda:[a-z0-9-]+:\d{12}:function:([a-zA-Z0-9-_]+)$/;
  const match = lambdaArnPattern.exec(lambdaArn);

  if (match) {
    return match[1];
  } else {
    return "-";
  }
}

export function toTitleCase(str: string) {
  str = str.replace(/_/g, " ");
  return str.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
}

export const searchTable = (dataArray: any[], searchQuery: string) => {
  const query = searchQuery.toLowerCase().trim();
  if (!query) {
    return dataArray;
  }

  return dataArray.filter((row) => {
    // Check each column for a match
    return Object.values(row).some((value) => {
      if (typeof value === "string" || Array.isArray(value)) {
        const strValue = Array.isArray(value) ? value.join(" ") : String(value);
        return strValue.toLowerCase().includes(query);
      }
      return false;
    });
  });
};
