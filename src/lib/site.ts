const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined;

const vercelUrl = process.env.VERCEL_URL?.trim();
export const metadataBase = siteUrl ?? new URL(
  vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000",
);

export const siteName = "Keshav Sandhu - Product Engineer";
