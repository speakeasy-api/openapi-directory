import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VerificationBankTransferCodeTypeEnum {
    Bsb = "BSB",
    Ifsc = "IFSC",
    RoutingNumber = "ROUTING_NUMBER",
    SortCode = "SORT_CODE"
}
export declare class VerificationBankTransferCode extends SpeakeasyBase {
    id?: string;
    type?: VerificationBankTransferCodeTypeEnum;
}
