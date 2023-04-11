import { SpeakeasyBase } from "../../../internal/utils";
export declare class PaymentDebitMemoApplicationItemCreateRequestType extends SpeakeasyBase {
    /**
     * The amount of the payment associated with the specific debit memo or taxation item.
     *
     * @remarks
     *
     */
    amount: number;
    /**
     * The ID of the specific debit memo item.
     *
     * @remarks
     *
     */
    debitMemoItemId?: string;
    /**
     * The ID of the specific taxation item.
     *
     * @remarks
     *
     */
    taxItemId?: string;
}
