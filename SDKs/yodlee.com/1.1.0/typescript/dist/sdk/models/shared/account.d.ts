import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
import { AccountAddress } from "./accountaddress";
import { AutoRefresh } from "./autorefresh";
import { BankTransferCode } from "./banktransfercode";
import { Coverage } from "./coverage";
import { AccountDataset } from "./accountdataset";
import { FullAccountNumberList } from "./fullaccountnumberlist";
import { AccountHolder } from "./accountholder";
import { LoanPayoffDetails } from "./loanpayoffdetails";
import { PaymentProfile } from "./paymentprofile";
import { AccountProfile } from "./accountprofile";
import { RewardBalance } from "./rewardbalance";
export declare enum AccountContainerEnum {
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
export declare enum AccountAccountStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    ToBeClosed = "TO_BE_CLOSED",
    Closed = "CLOSED",
    Deleted = "DELETED"
}
export declare enum AccountAggregationSourceEnum {
    System = "SYSTEM",
    User = "USER"
}
export declare enum AccountClassificationEnum {
    Other = "OTHER",
    Personal = "PERSONAL",
    Corporate = "CORPORATE",
    SmallBusiness = "SMALL_BUSINESS",
    Trust = "TRUST",
    AddOnCard = "ADD_ON_CARD",
    VirtualCard = "VIRTUAL_CARD"
}
export declare enum AccountFrequencyEnum {
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
export declare enum AccountHomeInsuranceTypeEnum {
    HomeOwner = "HOME_OWNER",
    Rental = "RENTAL",
    Renter = "RENTER",
    Unknown = "UNKNOWN",
    Other = "OTHER"
}
export declare enum AccountInterestRateTypeEnum {
    Fixed = "FIXED",
    Variable = "VARIABLE",
    Unknown = "UNKNOWN",
    Other = "OTHER"
}
export declare enum AccountLifeInsuranceTypeEnum {
    Other = "OTHER",
    TermLifeInsurance = "TERM_LIFE_INSURANCE",
    UniversalLifeInsurance = "UNIVERSAL_LIFE_INSURANCE",
    WholeLifeInsurance = "WHOLE_LIFE_INSURANCE",
    VariableLifeInsurance = "VARIABLE_LIFE_INSURANCE",
    Ulip = "ULIP",
    Endowment = "ENDOWMENT"
}
export declare enum AccountOauthMigrationStatusEnum {
    InProgress = "IN_PROGRESS",
    ToBeMigrated = "TO_BE_MIGRATED",
    Completed = "COMPLETED"
}
export declare enum AccountPolicyStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Other = "OTHER"
}
export declare enum AccountRepaymentPlanTypeEnum {
    Standard = "STANDARD",
    Graduated = "GRADUATED",
    Extended = "EXTENDED",
    IncomeBased = "INCOME_BASED",
    IncomeContingent = "INCOME_CONTINGENT",
    IncomeSensitive = "INCOME_SENSITIVE",
    PayAsYouEarn = "PAY_AS_YOU_EARN",
    RevisedPayAsYouEarn = "REVISED_PAY_AS_YOU_EARN"
}
export declare enum AccountSourceAccountStatusEnum {
    InRepayment = "IN_REPAYMENT",
    Defaulted = "DEFAULTED",
    InSchool = "IN_SCHOOL",
    InGracePeriod = "IN_GRACE_PERIOD",
    Delinquency = "DELINQUENCY",
    Deferment = "DEFERMENT",
    Forbearance = "FORBEARANCE"
}
export declare enum AccountUserClassificationEnum {
    Business = "BUSINESS",
    Personal = "PERSONAL"
}
export declare enum AccountValuationTypeEnum {
    System = "SYSTEM",
    Manual = "MANUAL"
}
export declare class Account extends SpeakeasyBase {
    fourHundredAndOnekLoan?: Money;
    container?: AccountContainerEnum;
    accountName?: string;
    accountNumber?: string;
    accountStatus?: AccountAccountStatusEnum;
    accountType?: string;
    address?: AccountAddress;
    aggregationSource?: AccountAggregationSourceEnum;
    amountDue?: Money;
    annualPercentageYield?: number;
    annuityBalance?: Money;
    apr?: number;
    associatedProviderAccountId?: number[];
    autoRefresh?: AutoRefresh;
    availableBalance?: Money;
    availableCash?: Money;
    availableCredit?: Money;
    balance?: Money;
    bankTransferCode?: BankTransferCode[];
    cash?: Money;
    cashApr?: number;
    cashValue?: Money;
    classification?: AccountClassificationEnum;
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
    frequency?: AccountFrequencyEnum;
    fullAccountNumber?: string;
    fullAccountNumberList?: FullAccountNumberList;
    guarantor?: string;
    holder?: AccountHolder[];
    homeInsuranceType?: AccountHomeInsuranceTypeEnum;
    homeValue?: Money;
    id?: number;
    includeInNetWorth?: boolean;
    interestPaidLastYear?: Money;
    interestPaidYTD?: Money;
    interestRate?: number;
    interestRateType?: AccountInterestRateTypeEnum;
    isAsset?: boolean;
    isManual?: boolean;
    lastEmployeeContributionAmount?: Money;
    lastEmployeeContributionDate?: string;
    lastPayment?: Money;
    lastPaymentAmount?: Money;
    lastPaymentDate?: string;
    lastUpdated?: string;
    lender?: string;
    lifeInsuranceType?: AccountLifeInsuranceTypeEnum;
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
    oauthMigrationStatus?: AccountOauthMigrationStatusEnum;
    originalLoanAmount?: Money;
    originationDate?: string;
    overDraftLimit?: Money;
    paymentProfile?: PaymentProfile;
    policyEffectiveDate?: string;
    policyFromDate?: string;
    policyStatus?: AccountPolicyStatusEnum;
    policyTerm?: string;
    policyToDate?: string;
    premium?: Money;
    premiumPaymentTerm?: string;
    primaryRewardUnit?: string;
    principalBalance?: Money;
    profile?: AccountProfile;
    providerAccountId?: number;
    providerId?: string;
    providerName?: string;
    recurringPayment?: Money;
    remainingBalance?: Money;
    repaymentPlanType?: AccountRepaymentPlanTypeEnum;
    rewardBalance?: RewardBalance[];
    runningBalance?: Money;
    shortBalance?: Money;
    sourceAccountStatus?: AccountSourceAccountStatusEnum;
    sourceId?: string;
    term?: string;
    totalCashLimit?: Money;
    totalCreditLimit?: Money;
    totalCreditLine?: Money;
    totalUnvestedBalance?: Money;
    totalVestedBalance?: Money;
    userClassification?: AccountUserClassificationEnum;
    valuationType?: AccountValuationTypeEnum;
}
