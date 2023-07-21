interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Practice Manager'],
  customerRoles: ['PES Executive'],
  tenantRoles: ['Practice Manager', 'Provider Representative'],
  tenantName: 'Organization',
  applicationName: 'PES',
  addOns: ['file', 'notifications', 'chat'],
};
