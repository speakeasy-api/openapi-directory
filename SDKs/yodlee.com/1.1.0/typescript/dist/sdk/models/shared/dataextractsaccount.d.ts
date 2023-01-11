import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
import { AccountAddress } from "./accountaddress";
import { BankTransferCode } from "./banktransfercode";
import { Coverage } from "./coverage";
import { AccountDataset } from "./accountdataset";
import { LoanPayoffDetails } from "./loanpayoffdetails";
import { RewardBalance } from "./rewardbalance";
export declare enum DataExtractsAccountContainerEnum {
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
export declare enum DataExtractsAccountAccountStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    ToBeClosed = "TO_BE_CLOSED",
    Closed = "CLOSED",
    Deleted = "DELETED"
}
export declare enum DataExtractsAccountAggregationSourceEnum {
    System = "SYSTEM",
    User = "USER"
}
export declare enum DataExtractsAccountClassificationEnum {
    Other = "OTHER",
    Personal = "PERSONAL",
    Corporate = "CORPORATE",
    SmallBusiness = "SMALL_BUSINESS",
    Trust = "TRUST",
    AddOnCard = "ADD_ON_CARD",
    VirtualCard = "VIRTUAL_CARD"
}
export declare enum DataExtractsAccountFrequencyEnum {
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
export declare enum DataExtractsAccountHomeInsuranceTypeEnum {
    HomeOwner = "HOME_OWNER",
    Rental = "RENTAL",
    Renter = "RENTER",
    Unknown = "UNKNOWN",
    Other = "OTHER"
}
export declare enum DataExtractsAccountInterestRateTypeEnum {
    Fixed = "FIXED",
    Variable = "VARIABLE",
    Unknown = "UNKNOWN",
    Other = "OTHER"
}
export declare enum DataExtractsAccountLifeInsuranceTypeEnum {
    Other = "OTHER",
    TermLifeInsurance = "TERM_LIFE_INSURANCE",
    UniversalLifeInsurance = "UNIVERSAL_LIFE_INSURANCE",
    WholeLifeInsurance = "WHOLE_LIFE_INSURANCE",
    VariableLifeInsurance = "VARIABLE_LIFE_INSURANCE",
    Ulip = "ULIP",
    Endowment = "ENDOWMENT"
}
export declare enum DataExtractsAccountOauthMigrationStatusEnum {
    InProgress = "IN_PROGRESS",
    ToBeMigrated = "TO_BE_MIGRATED",
    Completed = "COMPLETED"
}
export declare enum DataExtractsAccountPolicyStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Other = "OTHER"
}
export declare enum DataExtractsAccountRepaymentPlanTypeEnum {
    Standard = "STANDARD",
    Graduated = "GRADUATED",
    Extended = "EXTENDED",
    IncomeBased = "INCOME_BASED",
    IncomeContingent = "INCOME_CONTINGENT",
    IncomeSensitive = "INCOME_SENSITIVE",
    PayAsYouEarn = "PAY_AS_YOU_EARN",
    RevisedPayAsYouEarn = "REVISED_PAY_AS_YOU_EARN"
}
export declare enum DataExtractsAccountSourceAccountStatusEnum {
    InRepayment = "IN_REPAYMENT",
    Defaulted = "DEFAULTED",
    InSchool = "IN_SCHOOL",
    InGracePeriod = "IN_GRACE_PERIOD",
    Delinquency = "DELINQUENCY",
    Deferment = "DEFERMENT",
    Forbearance = "FORBEARANCE"
}
export declare enum DataExtractsAccountUserClassificationEnum {
    Business = "BUSINESS",
    Personal = "PERSONAL"
}
export declare enum DataExtractsAccountValuationTypeEnum {
    System = "SYSTEM",
    Manual = "MANUAL"
}
export declare class DataExtractsAccount extends SpeakeasyBase {
    fourHundredAndOnekLoan?: Money;
    container?: DataExtractsAccountContainerEnum;
    accountName?: string;
    accountNumber?: string;
    accountStatus?: DataExtractsAccountAccountStatusEnum;
    accountType?: string;
    address?: AccountAddress;
    aggregationSource?: DataExtractsAccountAggregationSourceEnum;
    amountDue?: Money;
    annualPercentageYield?: number;
    annuityBalance?: Money;
    apr?: number;
    associatedProviderAccountId?: number[];
    availableBalance?: Money;
    availableCash?: Money;
    availableCredit?: Money;
    balance?: Money;
    bankTransferCode?: BankTransferCode[];
    cash?: Money;
    cashApr?: number;
    cashValue?: Money;
    classification?: DataExtractsAccountClassificationEnum;
    collateral?: string;
    coverage?: Coverage[];
    createdDate?: string;
    currentBalance?: Money;
    currentLevel?: string;
    dataset?: AccountDataset[];
    deathBenefit?: Money;
    derivedApr?: number;
    displayedName?: string;
    dueDate?: string;
    enrollmentDate?: string;
    escrowBalance?: Money;
    estimatedDate?: string;
    expirationDate?: string;
    faceAmount?: Money;
    frequency?: DataExtractsAccountFrequencyEnum;
    guarantor?: string;
    homeInsuranceType?: DataExtractsAccountHomeInsuranceTypeEnum;
    homeValue?: Money;
    id?: number;
    includeInNetWorth?: boolean;
    interestPaidLastYear?: Money;
    interestPaidYTD?: Money;
    interestRate?: number;
    interestRateType?: DataExtractsAccountInterestRateTypeEnum;
    isAsset?: boolean;
    isDeleted?: boolean;
    isManual?: boolean;
    lastEmployeeContributionAmount?: Money;
    lastEmployeeContributionDate?: string;
    lastPayment?: Money;
    lastPaymentAmount?: Money;
    lastPaymentDate?: string;
    lastUpdated?: string;
    lender?: string;
    lifeInsuranceType?: DataExtractsAccountLifeInsuranceTypeEnum;
    loanPayByDate?: string;
    loanPayoffAmount?: Money;
    loanPayoffDetails?: LoanPayoffDetails;
    marginBalance?: Money;
    maturityAmount?: Money;
    maturityDate?: string;
    memo?: string;
    minimumAmountDue?: Money;
    moneyMarketBalance?: Money;
    nextLevel?: string;
    nickname?: string;
    oauthMigrationStatus?: DataExtractsAccountOauthMigrationStatusEnum;
    originalLoanAmount?: Money;
    originationDate?: string;
    overDraftLimit?: Money;
    policyEffectiveDate?: string;
    policyFromDate?: string;
    policyStatus?: DataExtractsAccountPolicyStatusEnum;
    policyTerm?: string;
    policyToDate?: string;
    premium?: Money;
    premiumPaymentTerm?: string;
    primaryRewardUnit?: string;
    principalBalance?: Money;
    providerAccountId?: number;
    providerId?: string;
    providerName?: string;
    recurringPayment?: Money;
    remainingBalance?: Money;
    repaymentPlanType?: DataExtractsAccountRepaymentPlanTypeEnum;
    rewardBalance?: RewardBalance[];
    runningBalance?: Money;
    shortBalance?: Money;
    sourceAccountStatus?: DataExtractsAccountSourceAccountStatusEnum;
    sourceId?: string;
    term?: string;
    totalCashLimit?: Money;
    totalCreditLimit?: Money;
    totalCreditLine?: Money;
    totalUnvestedBalance?: Money;
    totalVestedBalance?: Money;
    userClassification?: DataExtractsAccountUserClassificationEnum;
    valuationType?: DataExtractsAccountValuationTypeEnum;
}
