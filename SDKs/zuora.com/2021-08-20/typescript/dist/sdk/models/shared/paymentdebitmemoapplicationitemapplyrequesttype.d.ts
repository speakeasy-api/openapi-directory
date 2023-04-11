import { SpeakeasyBase } from "../../../internal/utils";
export declare class PaymentDebitMemoApplicationItemApplyRequestType extends SpeakeasyBase {
    /**
     * The amount of the payment that is applied to the specific debit memo or taxation item.
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
