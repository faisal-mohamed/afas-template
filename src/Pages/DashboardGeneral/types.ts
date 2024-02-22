export interface Compliance {
  complianceType: string;
  compliantRuleCount: number;
  nonCompliantRuleCount: number;
  totalRuleCount: number;
}

export interface NonCompliantRules {
  accountId: string;
  awsRegion: string;
  compliance: Compliance;
  conformancePackName: string;
}

export interface Top5NonComplianceResource {
  AccountId: string;
  count: number;
}

export interface NonComplianceResources {
  count: string;
  configuration: {
    complianceType: string;
  };
}

export interface NonComplianceResourcesByType {
  compute: number;
  container: number;
  security: number;
  storage: number;
  db: number;
  network: number;
}

export interface NonComplianceRulesTypeContent {
  ruleName: string;
  count: number;
}

export type NonComplianceRulesType = NonComplianceRulesTypeContent[];

export type ReactEchartsProps = {
  totalFindings: number | undefined;
  chartData: any[] | undefined;
  chartTitle: string;
};

export enum findings {
  MEDIUM = "MEDIUM",
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  LOW = "LOW",
  UNTRIAGED = "UNTRIAGED",
}

export const SuppressRequestDetail = {
  REJECTED: "REJECTED",
  APPROVED: "APPROVED",
  PENDING: "PENDING",
};

export type CardWidgetProps = {
  Name: string;
  Total: number;
  className?: string;
  imageSource: string;
  dashboardType?: string;
  cmdCardData?: widgetCardContent;
};

export type resourceDataContent = {
  "COUNT(*)": number;
  configuration: {
    complianceType: string;
  };
};
export type totalResourceCompliant = {
  "COUNT(*)": number;
  relationships: {
    resourceType: string;
  };
};

export type widgetCardContent = {
  name: string;
  value: number;
  numberClassName?: string;
  icon: string;
  wrapClassName?: string;
  onClickResourceCount?: () => void;
}[];

export type instanceDataContent = {
  "COUNT(*)": number;
  resourceType: string;
};
export type Top5ResourceAccount = {
  "COUNT(*)": number;
  accountId: string;
};

export interface PieDataItem {
  value: number;
  name: string;
}

export type AccountContent = {
  AccountId: string;
  count: number;
};

export type SuppressDataContent = {
  Status: string;
  count: number;
};
export type DashboardChartProps = {
  isSingleAccount?: boolean | undefined;
  className?: string;
  chartClassName?: string;
};

export type RegulatoryComponent = {
  conformanceValue: string;
  cardClassName?: string;
  chartClassName?: string;
};
