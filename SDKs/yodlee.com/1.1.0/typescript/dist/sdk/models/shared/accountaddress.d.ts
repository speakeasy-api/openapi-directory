import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountAddressTypeEnum {
    Home = "HOME",
    Business = "BUSINESS",
    Pobox = "POBOX",
    Retail = "RETAIL",
    Office = "OFFICE",
    SmallBusiness = "SMALL_BUSINESS",
    Communication = "COMMUNICATION",
    Permanent = "PERMANENT",
    StatementAddress = "STATEMENT_ADDRESS",
    Payment = "PAYMENT",
    Payoff = "PAYOFF",
    Unknown = "UNKNOWN"
}
export declare class AccountAddress extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    address3?: string;
    city?: string;
    country?: string;
    sourceType?: string;
    state?: string;
    street?: string;
    type?: AccountAddressTypeEnum;
    zip?: string;
}
