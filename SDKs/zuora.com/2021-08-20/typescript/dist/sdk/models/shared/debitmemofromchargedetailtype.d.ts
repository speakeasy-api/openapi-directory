import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the finance information related to the product rate plan charge associated with the debit memo.
 *
 * @remarks
 *
 */
export declare class DebitMemoFromChargeDetailTypeFinanceInformation extends SpeakeasyBase {
    /**
     * The accounting code for the deferred revenue, such as Monthly Recurring Liability.
     *
     * @remarks
     *
     */
    deferredRevenueAccountingCode?: string;
    /**
     * The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges.
     *
     * @remarks
     *
     */
    recognizedRevenueAccountingCode?: string;
    /**
     * The name of the revenue recognition rule governing the revenue schedule.
     *
     * @remarks
     *
     */
    revenueRecognitionRuleName?: string;
}
/**
 * Container for custom fields of a Debit Memo Item object.
 *
 * @remarks
 *
 */
export declare class DebitMemoFromChargeDetailType extends SpeakeasyBase {
    /**
     * The amount of the debit memo item.
     *
     * @remarks
     *
     * **Note**: This field is only available if you set the `zuora-version` request header to `224.0` or later.
     *
     */
    amount?: number;
    /**
     * The ID of the product rate plan charge that the debit memo is created from.
     *
     * @remarks
     *
     * **Note**: This field is not available if you set the `zuora-version` request header to `257.0` or later.
     *
     */
    chargeId: string;
    /**
     * Comments about the product rate plan charge.
     *
     * @remarks
     *
     * **Note**: This field is not available if you set the `zuora-version` request header to `257.0` or before.
     *
     */
    comment?: string;
    /**
     * The description of the product rate plan charge.
     *
     * @remarks
     *
     * **Note**: This field is only available if you set the `zuora-version` request header to `257.0` or later.
     *
     */
    description?: string;
    /**
     * Container for the finance information related to the product rate plan charge associated with the debit memo.
     *
     * @remarks
     *
     */
    financeInformation?: DebitMemoFromChargeDetailTypeFinanceInformation;
    /**
     * The amount of the debit memo item.
     *
     * @remarks
     *
     * **Note**: This field is not available if you set the `zuora-version` request header to `224.0` or later.
     *
     */
    memoItemAmount?: number;
    /**
     * The ID of the product rate plan charge that the debit memo is created from.
     *
     * @remarks
     *
     * **Note**: This field is only available if you set the `zuora-version` request header to `257.0` or later.
     *
     */
    productRatePlanChargeId: string;
    /**
     * The number of units for the debit memo item.
     *
     * @remarks
     *
     */
    quantity?: number;
    /**
     * The service end date of the debit memo item. If not specified, the effective end date of the corresponding product rate plan will be used.
     *
     * @remarks
     *
     */
    serviceEndDate?: Date;
    /**
     * The service start date of the debit memo item. If not specified, the effective start date of the corresponding product rate plan will be used.
     *
     * @remarks
     *
     */
    serviceStartDate?: Date;
}
