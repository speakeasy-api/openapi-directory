import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentDebitMemoApplicationItemApplyRequestType } from "./paymentdebitmemoapplicationitemapplyrequesttype";
export declare class PaymentDebitMemoApplicationApplyRequestType extends SpeakeasyBase {
    amount: number;
    debitMemoId?: string;
    items?: PaymentDebitMemoApplicationItemApplyRequestType[];
}
