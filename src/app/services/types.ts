export interface paginationPayload {
  page: number;
  limit: number;
}

export interface AccountIdPayload {
  AccountId: string[];
  count: number;
}
export interface SeverityPayload {
  Severity: string[];
  count: string;
}

export interface SeverityItem {
  Severity: string;
  count: number;
}
export type SeverityResponse = [SeverityItem];
export interface AccountIdResponse {
  AccountId: string;
  count: number;
}

interface regulatoryResponseContent {
  score: string;
  conformancePackName: string;
  lastUpdatedTime: string;
}

export type regulatoryResponse = [regulatoryResponseContent];

type ResourceTypeDataContent = {
  "Resource Type": string;
  Count: number;
};

export type ResourceTypeResponse = {
  content: [ResourceTypeDataContent];
  totalPages: number;
};

type ConfigRuleContent = {
  "Config rule": string;
  Count: number;
};

export type ConfigRuleResponse = {
  content: [ConfigRuleContent];
  totalPages: number;
};

export interface UpdateSuppressRequest {
  id: number;
  findingId: string;
  requesterName: string;
  accountId: string;
  severity: string;
  comments: string;
  type: string;
  status: string;
  date: string;
  effectiveDate: string;
  expiryDate: string;
}
export interface ResourceTypePayload {
  ResourceType: string;
  count: string;
}
export interface PackageNamePayload {
  PackageName: string;
  count: string;
}

export interface PackageManagerPayload {
  PackageManager: string;
  count: string;
}
export interface FilteredSuppressPayload {
  payload: {
    accountIds: string[];
    severity: string[];
    type: string[];
    status: string[];
    fromDate: number;
    toDate: number;
  };
  page: number;
  limit: number;
}
export type SecurityGroupListResponse = [SecurityGroup];

export interface SecurityGroup {
  dn: string;
  cn: string;
  ou: string;
  uniqueMembers: any;
  users: any;
}

export type MappedSecurityGroupResponse = [MappedSecurityGroup];

export interface MappedSecurityGroup {
  id: number;
  name: string;
  accountIds: string[];
}

export type UpdateLdapAccountPayload = {
  id: number;
  groupName: string;
  status: boolean;
  accountId: string;
};

export type AddLdapAccountPayload = {
  id: number;
  groupName: string;
  accountIds: UpdateLdapAccountPayload[];
};

export type groupByAccountsPayload = {
  id: number;
  page: number;
  limit: number;
};

export type GroupContent = {
  id: number;
  groupName: string;
  accountIds: UpdateLdapAccountPayload[];
};
export interface ListGroupResponse {
  mapped: GroupContent[];
  unmapped: GroupContent[];
}

export type filterOptionsPayload = {
  conformancePackName: string;
  searchString: string;
  page: number;
};

export type ListOfAccountIds = {
  id: string;
  arn: string;
  email: string;
  name: string;
  status: string;
  joinedMethod: string;
  joinedTimestamp: string;
};

export type ListPrincipalTypes = {
  count: number;
  principalType: string;
};

export type ListPrincipalNames = {
  count: number;
  principalName: string;
};

export type ListPermissionSetNames = {
  count: number;
  permissionset_name: string;
};

export type RegulatoryDashboardPayload = {
  conformancePackName: string;
  view?: string;
};
