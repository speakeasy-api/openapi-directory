import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAddress } from "./accountaddress";
import { Money } from "./money";
export declare enum CreateAccountInfoFrequencyEnum {
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
export declare enum CreateAccountInfoValuationTypeEnum {
    System = "SYSTEM",
    Manual = "MANUAL"
}
export declare class CreateAccountInfo extends SpeakeasyBase {
    accountName: string;
    accountNumber?: string;
    accountType: string;
    address?: AccountAddress;
    amountDue?: Money;
    balance?: Money;
    dueDate?: string;
    frequency?: CreateAccountInfoFrequencyEnum;
    homeValue?: Money;
    includeInNetWorth?: string;
    memo?: string;
    nickname?: string;
    valuationType?: CreateAccountInfoValuationTypeEnum;
}
