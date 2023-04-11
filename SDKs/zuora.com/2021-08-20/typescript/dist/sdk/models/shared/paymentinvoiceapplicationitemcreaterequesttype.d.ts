import { SpeakeasyBase } from "../../../internal/utils";
export declare class PaymentInvoiceApplicationItemCreateRequestType extends SpeakeasyBase {
    /**
     * The amount of the payment associated with the specific invoice or taxation item.
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
