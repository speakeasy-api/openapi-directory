import { SpeakeasyBase } from "../../../internal/utils";
import { OrderInfo } from "./orderinfo";
export declare class CreateGiftCardTransactionRequest extends SpeakeasyBase {
    description: string;
    operation: string;
    orderInfo?: OrderInfo;
    redemptionCode: string;
    redemptionToken: string;
    requestId: string;
    value: number;
}
