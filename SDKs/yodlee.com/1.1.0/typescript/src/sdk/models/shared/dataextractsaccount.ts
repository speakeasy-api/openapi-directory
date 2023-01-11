import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
import { AccountAddress } from "./accountaddress";
import { BankTransferCode } from "./banktransfercode";
import { Coverage } from "./coverage";
import { AccountDataset } from "./accountdataset";
import { LoanPayoffDetails } from "./loanpayoffdetails";
import { RewardBalance } from "./rewardbalance";


export enum DataExtractsAccountContainerEnum {
    Bank = "bank",
    CreditCard = "creditCard",
    Investment = "investment",
    Insurance = "insurance",
    Loan = "loan",
    Reward = "reward",
    RealEstate = "realEstate",
    OtherAssets = "otherAssets",
    OtherLiabilities = "otherLiabilities"
}

export enum DataExtractsAccountAccountStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    ToBeClosed = "TO_BE_CLOSED",
    Closed = "CLOSED",
    Deleted = "DELETED"
}

export enum DataExtractsAccountAggregationSourceEnum {
    System = "SYSTEM",
    User = "USER"
}

export enum DataExtractsAccountClassificationEnum {
    Other = "OTHER",
    Personal = "PERSONAL",
    Corporate = "CORPORATE",
    SmallBusiness = "SMALL_BUSINESS",
    Trust = "TRUST",
    AddOnCard = "ADD_ON_CARD",
    VirtualCard = "VIRTUAL_CARD"
}

export enum DataExtractsAccountFrequencyEnum {
    Daily = "DAILY",
    OneTime = "ONE_TIME",
    Weekly = "WEEKLY",
    Every2Weeks = "EVERY_2_WEEKS",
    SemiMonthly = "SEMI_MONTHLY",
    Monthly = "MONTHLY",
    Quarterly = "QUARTERLY",
    SemiAnnually = "SEMI_ANNUALLY",
    Annually = "ANNUALLY",
    Every2Months = "EVERY_2_MONTHS",
    Ebill = "EBILL",
    FirstDayMonthly = "FIRST_DAY_MONTHLY",
    LastDayMonthly = "LAST_DAY_MONTHLY",
    Every4Weeks = "EVERY_4_WEEKS",
    Unknown = "UNKNOWN",
    Other = "OTHER"
}

export enum DataExtractsAccountHomeInsuranceTypeEnum {
    HomeOwner = "HOME_OWNER",
    Rental = "RENTAL",
    Renter = "RENTER",
    Unknown = "UNKNOWN",
    Other = "OTHER"
}

export enum DataExtractsAccountInterestRateTypeEnum {
    Fixed = "FIXED",
    Variable = "VARIABLE",
    Unknown = "UNKNOWN",
    Other = "OTHER"
}

export enum DataExtractsAccountLifeInsuranceTypeEnum {
    Other = "OTHER",
    TermLifeInsurance = "TERM_LIFE_INSURANCE",
    UniversalLifeInsurance = "UNIVERSAL_LIFE_INSURANCE",
    WholeLifeInsurance = "WHOLE_LIFE_INSURANCE",
    VariableLifeInsurance = "VARIABLE_LIFE_INSURANCE",
    Ulip = "ULIP",
    Endowment = "ENDOWMENT"
}

export enum DataExtractsAccountOauthMigrationStatusEnum {
    InProgress = "IN_PROGRESS",
    ToBeMigrated = "TO_BE_MIGRATED",
    Completed = "COMPLETED"
}

export enum DataExtractsAccountPolicyStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Other = "OTHER"
}

export enum DataExtractsAccountRepaymentPlanTypeEnum {
    Standard = "STANDARD",
    Graduated = "GRADUATED",
    Extended = "EXTENDED",
    IncomeBased = "INCOME_BASED",
    IncomeContingent = "INCOME_CONTINGENT",
    IncomeSensitive = "INCOME_SENSITIVE",
    PayAsYouEarn = "PAY_AS_YOU_EARN",
    RevisedPayAsYouEarn = "REVISED_PAY_AS_YOU_EARN"
}

export enum DataExtractsAccountSourceAccountStatusEnum {
    InRepayment = "IN_REPAYMENT",
    Defaulted = "DEFAULTED",
    InSchool = "IN_SCHOOL",
    InGracePeriod = "IN_GRACE_PERIOD",
    Delinquency = "DELINQUENCY",
    Deferment = "DEFERMENT",
    Forbearance = "FORBEARANCE"
}

export enum DataExtractsAccountUserClassificationEnum {
    Business = "BUSINESS",
    Personal = "PERSONAL"
}

export enum DataExtractsAccountValuationTypeEnum {
    System = "SYSTEM",
    Manual = "MANUAL"
}


export class DataExtractsAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=401kLoan" })
  fourHundredAndOnekLoan?: Money;

  @SpeakeasyMetadata({ data: "json, name=CONTAINER" })
  container?: DataExtractsAccountContainerEnum;

  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=accountStatus" })
  accountStatus?: DataExtractsAccountAccountStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: string;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: AccountAddress;

  @SpeakeasyMetadata({ data: "json, name=aggregationSource" })
  aggregationSource?: DataExtractsAccountAggregationSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=amountDue" })
  amountDue?: Money;

  @SpeakeasyMetadata({ data: "json, name=annualPercentageYield" })
  annualPercentageYield?: number;

  @SpeakeasyMetadata({ data: "json, name=annuityBalance" })
  annuityBalance?: Money;

  @SpeakeasyMetadata({ data: "json, name=apr" })
  apr?: number;

  @SpeakeasyMetadata({ data: "json, name=associatedProviderAccountId" })
  associatedProviderAccountId?: number[];

  @SpeakeasyMetadata({ data: "json, name=availableBalance" })
  availableBalance?: Money;

  @SpeakeasyMetadata({ data: "json, name=availableCash" })
  availableCash?: Money;

  @SpeakeasyMetadata({ data: "json, name=availableCredit" })
  availableCredit?: Money;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: Money;

  @SpeakeasyMetadata({ data: "json, name=bankTransferCode", elemType: BankTransferCode })
  bankTransferCode?: BankTransferCode[];

  @SpeakeasyMetadata({ data: "json, name=cash" })
  cash?: Money;

  @SpeakeasyMetadata({ data: "json, name=cashApr" })
  cashApr?: number;

  @SpeakeasyMetadata({ data: "json, name=cashValue" })
  cashValue?: Money;

  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: DataExtractsAccountClassificationEnum;

  @SpeakeasyMetadata({ data: "json, name=collateral" })
  collateral?: string;

  @SpeakeasyMetadata({ data: "json, name=coverage", elemType: Coverage })
  coverage?: Coverage[];

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=currentBalance" })
  currentBalance?: Money;

  @SpeakeasyMetadata({ data: "json, name=currentLevel" })
  currentLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=dataset", elemType: AccountDataset })
  dataset?: AccountDataset[];

  @SpeakeasyMetadata({ data: "json, name=deathBenefit" })
  deathBenefit?: Money;

  @SpeakeasyMetadata({ data: "json, name=derivedApr" })
  derivedApr?: number;

  @SpeakeasyMetadata({ data: "json, name=displayedName" })
  displayedName?: string;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: string;

  @SpeakeasyMetadata({ data: "json, name=enrollmentDate" })
  enrollmentDate?: string;

  @SpeakeasyMetadata({ data: "json, name=escrowBalance" })
  escrowBalance?: Money;

  @SpeakeasyMetadata({ data: "json, name=estimatedDate" })
  estimatedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=faceAmount" })
  faceAmount?: Money;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: DataExtractsAccountFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=guarantor" })
  guarantor?: string;

  @SpeakeasyMetadata({ data: "json, name=homeInsuranceType" })
  homeInsuranceType?: DataExtractsAccountHomeInsuranceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=homeValue" })
  homeValue?: Money;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=includeInNetWorth" })
  includeInNetWorth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=interestPaidLastYear" })
  interestPaidLastYear?: Money;

  @SpeakeasyMetadata({ data: "json, name=interestPaidYTD" })
  interestPaidYTD?: Money;

  @SpeakeasyMetadata({ data: "json, name=interestRate" })
  interestRate?: number;

  @SpeakeasyMetadata({ data: "json, name=interestRateType" })
  interestRateType?: DataExtractsAccountInterestRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=isAsset" })
  isAsset?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isManual" })
  isManual?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastEmployeeContributionAmount" })
  lastEmployeeContributionAmount?: Money;

  @SpeakeasyMetadata({ data: "json, name=lastEmployeeContributionDate" })
  lastEmployeeContributionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=lastPayment" })
  lastPayment?: Money;

  @SpeakeasyMetadata({ data: "json, name=lastPaymentAmount" })
  lastPaymentAmount?: Money;

  @SpeakeasyMetadata({ data: "json, name=lastPaymentDate" })
  lastPaymentDate?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=lender" })
  lender?: string;

  @SpeakeasyMetadata({ data: "json, name=lifeInsuranceType" })
  lifeInsuranceType?: DataExtractsAccountLifeInsuranceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=loanPayByDate" })
  loanPayByDate?: string;

  @SpeakeasyMetadata({ data: "json, name=loanPayoffAmount" })
  loanPayoffAmount?: Money;

  @SpeakeasyMetadata({ data: "json, name=loanPayoffDetails" })
  loanPayoffDetails?: LoanPayoffDetails;

  @SpeakeasyMetadata({ data: "json, name=marginBalance" })
  marginBalance?: Money;

  @SpeakeasyMetadata({ data: "json, name=maturityAmount" })
  maturityAmount?: Money;

  @SpeakeasyMetadata({ data: "json, name=maturityDate" })
  maturityDate?: string;

  @SpeakeasyMetadata({ data: "json, name=memo" })
  memo?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumAmountDue" })
  minimumAmountDue?: Money;

  @SpeakeasyMetadata({ data: "json, name=moneyMarketBalance" })
  moneyMarketBalance?: Money;

  @SpeakeasyMetadata({ data: "json, name=nextLevel" })
  nextLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthMigrationStatus" })
  oauthMigrationStatus?: DataExtractsAccountOauthMigrationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=originalLoanAmount" })
  originalLoanAmount?: Money;

  @SpeakeasyMetadata({ data: "json, name=originationDate" })
  originationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=overDraftLimit" })
  overDraftLimit?: Money;

  @SpeakeasyMetadata({ data: "json, name=policyEffectiveDate" })
  policyEffectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=policyFromDate" })
  policyFromDate?: string;

  @SpeakeasyMetadata({ data: "json, name=policyStatus" })
  policyStatus?: DataExtractsAccountPolicyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=policyTerm" })
  policyTerm?: string;

  @SpeakeasyMetadata({ data: "json, name=policyToDate" })
  policyToDate?: string;

  @SpeakeasyMetadata({ data: "json, name=premium" })
  premium?: Money;

  @SpeakeasyMetadata({ data: "json, name=premiumPaymentTerm" })
  premiumPaymentTerm?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryRewardUnit" })
  primaryRewardUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=principalBalance" })
  principalBalance?: Money;

  @SpeakeasyMetadata({ data: "json, name=providerAccountId" })
  providerAccountId?: number;

  @SpeakeasyMetadata({ data: "json, name=providerId" })
  providerId?: string;

  @SpeakeasyMetadata({ data: "json, name=providerName" })
  providerName?: string;

  @SpeakeasyMetadata({ data: "json, name=recurringPayment" })
  recurringPayment?: Money;

  @SpeakeasyMetadata({ data: "json, name=remainingBalance" })
  remainingBalance?: Money;

  @SpeakeasyMetadata({ data: "json, name=repaymentPlanType" })
  repaymentPlanType?: DataExtractsAccountRepaymentPlanTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=rewardBalance", elemType: RewardBalance })
  rewardBalance?: RewardBalance[];

  @SpeakeasyMetadata({ data: "json, name=runningBalance" })
  runningBalance?: Money;

  @SpeakeasyMetadata({ data: "json, name=shortBalance" })
  shortBalance?: Money;

  @SpeakeasyMetadata({ data: "json, name=sourceAccountStatus" })
  sourceAccountStatus?: DataExtractsAccountSourceAccountStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCashLimit" })
  totalCashLimit?: Money;

  @SpeakeasyMetadata({ data: "json, name=totalCreditLimit" })
  totalCreditLimit?: Money;

  @SpeakeasyMetadata({ data: "json, name=totalCreditLine" })
  totalCreditLine?: Money;

  @SpeakeasyMetadata({ data: "json, name=totalUnvestedBalance" })
  totalUnvestedBalance?: Money;

  @SpeakeasyMetadata({ data: "json, name=totalVestedBalance" })
  totalVestedBalance?: Money;

  @SpeakeasyMetadata({ data: "json, name=userClassification" })
  userClassification?: DataExtractsAccountUserClassificationEnum;

  @SpeakeasyMetadata({ data: "json, name=valuationType" })
  valuationType?: DataExtractsAccountValuationTypeEnum;
}
