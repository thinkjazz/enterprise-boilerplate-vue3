export const loadView = view => () =>
  import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);

export const withNestedView = feature => view => () => {
  return import(
    /* webpackChunkName: "view-[request]" */ `@/views/${feature}/${view}.vue`
  );
};
