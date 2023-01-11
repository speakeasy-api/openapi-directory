import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAddress } from "./accountaddress";
import { Money } from "./money";
export declare enum UpdateAccountInfoAccountStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    ToBeClosed = "TO_BE_CLOSED",
    Closed = "CLOSED",
    Deleted = "DELETED"
}
export declare enum UpdateAccountInfoContainerEnum {
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
export declare enum UpdateAccountInfoFrequencyEnum {
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
export declare class UpdateAccountInfo extends SpeakeasyBase {
    accountName?: string;
    accountNumber?: string;
    accountStatus?: UpdateAccountInfoAccountStatusEnum;
    address?: AccountAddress;
    amountDue?: Money;
    balance?: Money;
    container?: UpdateAccountInfoContainerEnum;
    dueDate?: string;
    frequency?: UpdateAccountInfoFrequencyEnum;
    homeValue?: Money;
    includeInNetWorth?: string;
    isEbillEnrolled?: string;
    memo?: string;
    nickname?: string;
}
