import { SORT_ORDER } from "./constants";

export function checkNullOrUndefinedArray(data: any) {
  if (data !== undefined && data !== null && data.length > 0) return true;
  else return false;
}

export function checkNullOrUndefinedValue(data: any) {
  if (data !== undefined && data !== null) return true;
  else return false;
}

export const handleTableColumnSort = (
  data: any,
  columnName: string,
  sortOrder = "desc"
) => {
  const sortedData = [...data];

  sortedData.sort((a, b) => {
    const valueA = a[columnName];
    const valueB = b[columnName];

    let comparison = 0;

    if (valueA > valueB) {
      comparison = 1;
    } else if (valueA < valueB) {
      comparison = -1;
    }

    return sortOrder === SORT_ORDER.DESC ? comparison * -1 : comparison;
  });

  return sortedData;
};
