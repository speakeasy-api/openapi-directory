import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutReverseInvoiceType extends SpeakeasyBase {
    /**
     * The date when the credit memo was applied to the invoice that will be reversed, in `yyyy-mm-dd` format. The effective date must be later than or equal to the memo date.
     *
     * @remarks
     *
     * Default value is today's date.
     *
     */
    applyEffectiveDate?: Date;
    /**
     * The date when the credit memo was created, in `yyyy-mm-dd` format. The memo date must be later than or equal to the invoice date.
     *
     * @remarks
     *
     * Default value is today's date.
     *
     */
    memoDate?: Date;
}
