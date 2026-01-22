const toConvexSiteUrl = (url: string) => {
  if (url.includes(".convex.site")) {
    return url;
  }

  if (url.includes(".convex.cloud")) {
    return url.replace(".convex.cloud", ".convex.site");
  }

  return url;
};

export const getConvexSiteUrl = (url?: string) => {
  if (!url) {
    return undefined;
  }

  return toConvexSiteUrl(url);
};

export const getConvexActionUrl = (baseUrl: string | undefined, action: string) => {
  const siteUrl = getConvexSiteUrl(baseUrl);
  if (!siteUrl) {
    return undefined;
  }

  return `${siteUrl.replace(/\/$/, "")}/${action}`;
};
