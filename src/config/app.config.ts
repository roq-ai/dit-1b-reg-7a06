interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Teacher'],
  customerRoles: [],
  tenantRoles: ['School Administrator', 'Teacher'],
  tenantName: 'School',
  applicationName: 'DIT 1B REG',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage schedules', 'Manage homework', 'Manage exams', 'Manage subjects'],
  getQuoteUrl: 'https://app.roq.ai/proposal/50bfca63-94ce-4f95-9a0e-23614955ccff',
};
