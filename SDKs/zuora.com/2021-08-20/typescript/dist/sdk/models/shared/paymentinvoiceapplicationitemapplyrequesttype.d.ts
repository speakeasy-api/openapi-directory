import { SpeakeasyBase } from "../../../internal/utils";
export declare class PaymentInvoiceApplicationItemApplyRequestType extends SpeakeasyBase {
    /**
     * The amount of the payment that is applied to the specific invoice or taxation item.
     *
     * @remarks
     *
     */
    amount: number;
    /**
     * The ID of the specific invoice item.
     *
     * @remarks
     *
     */
    invoiceItemId?: string;
    /**
     * The ID of the specific taxation item.
     *
     * @remarks
     *
     */
    taxItemId?: string;
}
