import {
  AccountGroupContent,
  GroupByAccountsResponse,
} from "../pages/Configuration/types";

export interface FilterSliceState {
  commonFilter: {
    accountId: string[];
    severity: string[];
    resourceType: string[];
    configRules: string[];
    packageName: string[];
    packageManager: string[];
    status: string[];
    type: string[];
    conformancePack: string;
    principalName: string[];
    principalType: string[];
    permissionSetName: string[];
  };
  selectedDate: {
    fromDate: number;
    toDate: number;
  };
}

export interface SettingSliceState {
  ldapConfig: {
    ldapHostName: string;
    ldapPort: number;
    ldapUserName: string;
    ldapPassword: string;
  };
  mailConfig: {
    smtpHostName: string;
    smtpPort: number;
    smtpFromEmailAddress: string;
    smtpUserName: string;
    smtpPassword: string;
  };
}

export interface AccountIdData {
  AccountId: string;
  count: number;
}

interface canvasFields {
  isOffcanvasOpen: boolean;
  data: any[];
  fields: any[];
  title: string;
  mainId: string;
}
export type commonSliceState = {
  canvasFields: canvasFields;
};

type AccountMappingState = {
  isFilterOpen: boolean;
  isAddAccountPanel: boolean;
  loadPage: boolean;
  filteredAccounts: AccountGroupContent[];
  selectedGroup: GroupByAccountsResponse;
};

export interface ConfigurationInitialState {
  accountMapping: AccountMappingState;
}

export type InventoryStateContent = {
  page: number;
  limit: number;
  nextToken: string[];
  isPageReachedEnd: boolean;
};

export interface InventoryReduxState {
  inventoryState: InventoryStateContent;
}
