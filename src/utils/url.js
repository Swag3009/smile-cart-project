import { keysToSnakeCase } from "neetocist";
import { stringify } from "qs";
import { toPairs, omit, pipe, isEmpty } from "ramda";

export const buildUrl = (route, params) => {
  const placeHolders = [];
  toPairs(params).forEach(([keys, value]) => {
    if (route.includes(`:${keys}`)) {
      route = route.replace(`:${keys}`, encodeURIComponent(value));
    }
  });

  const queryParams = pipe(
    omit(placeHolders),
    keysToSnakeCase,
    stringify
  )(params);

  return isEmpty(queryParams) ? route : `${route}?${queryParams}`;
};
