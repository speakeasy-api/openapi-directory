import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentDebitMemoApplicationItemUnapplyRequestType } from "./paymentdebitmemoapplicationitemunapplyrequesttype";
export declare class PaymentDebitMemoApplicationUnapplyRequestType extends SpeakeasyBase {
    amount: number;
    debitMemoId?: string;
    items?: PaymentDebitMemoApplicationItemUnapplyRequestType[];
}
