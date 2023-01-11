import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAddress } from "./accountaddress";
import { Money } from "./money";


export enum CreateAccountInfoFrequencyEnum {
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

export enum CreateAccountInfoValuationTypeEnum {
    System = "SYSTEM",
    Manual = "MANUAL"
}


export class CreateAccountInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType: string;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: AccountAddress;

  @SpeakeasyMetadata({ data: "json, name=amountDue" })
  amountDue?: Money;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: Money;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: string;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: CreateAccountInfoFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=homeValue" })
  homeValue?: Money;

  @SpeakeasyMetadata({ data: "json, name=includeInNetWorth" })
  includeInNetWorth?: string;

  @SpeakeasyMetadata({ data: "json, name=memo" })
  memo?: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname?: string;

  @SpeakeasyMetadata({ data: "json, name=valuationType" })
  valuationType?: CreateAccountInfoValuationTypeEnum;
}
