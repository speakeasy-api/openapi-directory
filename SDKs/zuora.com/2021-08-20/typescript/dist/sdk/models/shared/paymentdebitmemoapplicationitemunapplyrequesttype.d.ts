import { SpeakeasyBase } from "../../../internal/utils";
export declare class PaymentDebitMemoApplicationItemUnapplyRequestType extends SpeakeasyBase {
    /**
     * The amount of the payment that is unapplied from the specific debit mem or taxation item.
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
