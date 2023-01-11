import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerAttributes } from "./containerattributes";


export enum AttributeContainerEnum {
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

export enum AttributeNameEnum {
    BasicAccountInfo = "BASIC_ACCOUNT_INFO",
    Transactions = "TRANSACTIONS",
    Statements = "STATEMENTS",
    Holdings = "HOLDINGS",
    AccountDetails = "ACCOUNT_DETAILS",
    Tax = "TAX",
    Ebills = "EBILLS",
    FullAcctNumber = "FULL_ACCT_NUMBER",
    BankTransferCode = "BANK_TRANSFER_CODE",
    HolderName = "HOLDER_NAME",
    HolderDetails = "HOLDER_DETAILS",
    PaymentProfile = "PAYMENT_PROFILE",
    PaymentDetails = "PAYMENT_DETAILS",
    InterestDetails = "INTEREST_DETAILS",
    Coverage = "COVERAGE"
}


export class AttributeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: AttributeContainerEnum[];

  @SpeakeasyMetadata({ data: "json, name=containerAttributes" })
  containerAttributes?: ContainerAttributes;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: AttributeNameEnum;
}


export class Attribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: AttributeContainerEnum[];

  @SpeakeasyMetadata({ data: "json, name=containerAttributes" })
  containerAttributes?: ContainerAttributes;

  @SpeakeasyMetadata({ data: "json, name=fromDate" })
  fromDate?: string;

  @SpeakeasyMetadata({ data: "json, name=fromFinYear" })
  fromFinYear?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: AttributeNameEnum;

  @SpeakeasyMetadata({ data: "json, name=toDate" })
  toDate?: string;

  @SpeakeasyMetadata({ data: "json, name=toFinYear" })
  toFinYear?: string;
}
