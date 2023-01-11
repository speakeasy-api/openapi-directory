import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BankTransferCodeTypeEnum {
    Bsb = "BSB",
    Ifsc = "IFSC",
    RoutingNumber = "ROUTING_NUMBER",
    SortCode = "SORT_CODE"
}
export declare class BankTransferCode extends SpeakeasyBase {
    id?: string;
    type?: BankTransferCodeTypeEnum;
}
