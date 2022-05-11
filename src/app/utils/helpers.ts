export function numberFormatter(value: number) {
  const hundredthPart =
    value % 1000 >= 100 ? `.${Math.trunc((value % 1000) / 100)}` : "";

  return value >= 1000 ? `${Math.floor(value / 1000)}${hundredthPart}K` : value;
}

export function displayCurrentReposNum(
  countPerPage: number,
  currentPage: number,
  repos: number,
  currentRepoCount: number
) {
  const firstRepo = countPerPage * currentPage - (countPerPage - 1);
  const lastRepo =
    countPerPage * currentPage - (countPerPage - currentRepoCount);

  return firstRepo === lastRepo
    ? `${lastRepo} of ${repos}`
    : `${firstRepo}-${lastRepo} of ${repos}`;
}
