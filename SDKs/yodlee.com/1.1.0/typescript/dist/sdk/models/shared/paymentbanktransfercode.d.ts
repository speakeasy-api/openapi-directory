import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PaymentBankTransferCodeTypeEnum {
    RoutingNumber = "ROUTING_NUMBER",
    Bsb = "BSB",
    Ifsc = "IFSC",
    SortCode = "SORT_CODE"
}
export declare class PaymentBankTransferCode extends SpeakeasyBase {
    id?: string;
    type?: PaymentBankTransferCodeTypeEnum;
}
