export const gitPage = (org: string): string => `https://${org}.github.io`;
export const gitHub = (org: string, project: string): string =>
  `https://github.com/${org}/${project}`;

export const Datetime = (): number => new Date().getFullYear();
