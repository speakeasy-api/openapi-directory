import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerAttributes } from "./containerattributes";
export declare enum AttributeContainerEnum {
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
export declare enum AttributeNameEnum {
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
export declare class AttributeInput extends SpeakeasyBase {
    container?: AttributeContainerEnum[];
    containerAttributes?: ContainerAttributes;
    name?: AttributeNameEnum;
}
export declare class Attribute extends SpeakeasyBase {
    container?: AttributeContainerEnum[];
    containerAttributes?: ContainerAttributes;
    fromDate?: string;
    fromFinYear?: string;
    name?: AttributeNameEnum;
    toDate?: string;
    toFinYear?: string;
}
