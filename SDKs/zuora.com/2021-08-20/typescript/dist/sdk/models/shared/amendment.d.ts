import { SpeakeasyBase } from "../../../internal/utils";
import { RatePlan } from "./rateplan";
import { RatePlanChargeDataInRatePlanData } from "./rateplanchargedatainrateplandata";
import { SubscriptionProductFeatureList } from "./subscriptionproductfeaturelist";
/**
 * A container for one `RatePlanData`. This field is only required if the `Type` field is set to `NewProduct`, `RemoveProduct`, or `UpdateProduct`.
 *
 * @remarks
 *
 */
export declare class AmendmentRatePlanData extends SpeakeasyBase {
    ratePlan: RatePlan;
    ratePlanChargeData?: RatePlanChargeDataInRatePlanData[];
    subscriptionProductFeatureList?: SubscriptionProductFeatureList;
}
export declare class Amendment extends SpeakeasyBase {
    /**
     *  Determines whether the subscription is automatically renewed, or whether it expires at the end of the term and needs to be manually renewed. For amendment of type `TermsAndConditions`, this field is only required if you change the automatic renewal status of a subscription.
     *
     * @remarks
     *
     *
     * **Values**: true, false
     */
    autoRenew?: boolean;
    /**
     *  A unique alphanumeric string that identifies the amendment.
     *
     * @remarks
     *
     *
     * **Character limit**: 50
     *
     * **Values**: automatically generated
     *
     */
    code?: string;
    /**
     *  The date when the amendment's changes become effective for billing purposes.
     *
     * @remarks
     *
     */
    contractEffectiveDate: Date;
    /**
     *  The user ID of the person who created the amendment.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     * **Values**: automatically generated
     */
    createdById?: string;
    /**
     *  The date when the amendment was created.
     *
     * @remarks
     *
     *
     * **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     *  The length of the period for the current subscription term. This field can be updated when Status is `Draft`.
     *
     * @remarks
     *
     * This field is only required if the `Type` field is set to `TermsAndConditions` and `TermType` is set to `TERMED`. This field is not required if `TermType` is set to `EVERGREEN`.
     *
     *
     * **Values**: a valid number
     */
    currentTerm?: number;
    /**
     *  The period type for the current subscription term. This field is only required if the `Type` field is set to `TermsAndConditions` and `TermType` is set to `TERMED`. This field is not required if `TermType` is set to `EVERGREEN`.
     *
     * @remarks
     *
     * **Values**:
     *
     * - `Month` (default)
     * - `Year`
     * - `Day`
     * - `Week`
     *
     *
     * **Note**:
     *
     * - This field can be updated when Status is `Draft`.
     * - This field is used with the CurrentTerm field to specify the current subscription term.
     *
     */
    currentTermPeriodType?: string;
    /**
     * The date when the customer accepts the amendment's changes to the subscription.
     *
     * @remarks
     *
     * This field is only required if [Zuora is configured to require customer acceptance in Z-Billing](https://knowledgecenter.zuora.com/CB_Billing/W_Billing_and_Payments_Settings/Define_Default_Subscription_Settings) and the subscription is currently in the Pending Acceptance status (the value of the `Status` field is currently `PendingAcceptance`).
     *
     * Use this field together with the `Status` field. When you set a date in this field as a customer acceptance date, you should also set the `Status` field as `Completed`.
     *
     */
    customerAcceptanceDate?: Date;
    /**
     *  A description of the amendment.
     *
     * @remarks
     *
     *
     * **Character limit**: 500
     *
     * **Values**: maximum 500 characters
     */
    description?: string;
    /**
     *  The ID of the subscription owner that the subscription is being transferred to.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     * **Values**: a valid account ID
     */
    destinationAccountId?: string;
    /**
     *  The ID of the invoice owner that the subscription is being transferred to.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     * **Values**: a valid invoice ID
     */
    destinationInvoiceOwnerId?: string;
    /**
     *  The date when the amendment's changes take effective. This field validates that the amendment's changes are within valid ranges of products and product rate plans.
     *
     * @remarks
     * This field is only required if the `Type` field is set to `Cancellation`.
     *
     *
     */
    effectiveDate?: Date;
    /**
     *  The name of the amendment.
     *
     * @remarks
     *
     *
     * **Character limit**: 100
     *
     * **Values**: a string of 100 characters or fewer
     */
    name: string;
    /**
     * A container for one `RatePlanData`. This field is only required if the `Type` field is set to `NewProduct`, `RemoveProduct`, or `UpdateProduct`.
     *
     * @remarks
     *
     */
    ratePlanData?: AmendmentRatePlanData;
    /**
     *  Specifies whether a termed subscription will remain termed or change to evergreen when it is renewed.
     *
     * @remarks
     *
     * This field is only required if the `TermType` field is set to `Termed`.
     *
     *
     * **Values**: RENEW_WITH_SPECIFIC_TERM (default), RENEW_TO_EVERGREEN
     */
    renewalSetting?: string;
    /**
     *  The term of renewal for the amended subscription. This field can be updated when Status is `Draft`.
     *
     * @remarks
     * This field is only required if the `Type` field is set to `TermsAndConditions`.
     *
     *
     * **Values:** a valid number
     */
    renewalTerm?: number;
    /**
     *  The period type for the subscription renewal term. This field can be updated when Status is `Draft`.
     *
     * @remarks
     * **Required**: Only if the value of the Type field is set to `TermsAndConditions`. This field is used with the RenewalTerm field to specify the subscription renewal term.
     *
     *
     * **Values**:
     *
     * - `Month` (default)
     * - `Year`
     * - `Day`
     * - `Week`
     *
     */
    renewalTermPeriodType?: string;
    /**
     * The date when the subscription resumption takes effect. See [Resume Date](https://knowledgecenter.zuora.com/BC_Subscription_Management/Subscriptions/Resume_a_Subscription#Resume_Date) for more information.
     *
     * @remarks
     *
     * This field is only required if you resume a suspended subscription.
     *
     */
    resumeDate?: Date;
    /**
     * The date when service is activated.
     *
     * @remarks
     *
     * This field is only required if [Zuora is configured to require service activation in Z-Billing](https://knowledgecenter.zuora.com/CB_Billing/W_Billing_and_Payments_Settings/Define_Default_Subscription_Settings) and the subscription is currently in the Pending Activation status (the value of the `Status` field is currently `PendingActivation`).
     *
     * Use this field together with the `Status` field. When you set a date in this field as a service activation date, you should also set the `Status` field as the expected next phase status: `Completed` or `PendingAcceptance`.
     *
     */
    serviceActivationDate?: Date;
    /**
     * The date when the UpdateProduct amendment takes effect. This field is only applicable if there is already a future-dated UpdateProduct amendment on the subscription.
     *
     * @remarks
     *
     *
     * For the UpdateProduct amendments, this field is only required if there is already a future-dated UpdateProduct amendment on the subscription.
     *
     */
    specificUpdateDate?: Date;
    /**
     *  The status of the amendment. Type: string (enum)
     *
     * @remarks
     *
     *
     *
     * **Values**: one of the following:
     *
     * - Draft (default, if left null)
     * - Pending Activation
     * - Pending Acceptance
     * - Completed
     *
     */
    status?: string;
    /**
     *  The ID of the subscription that the amendment changes.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     * **Values**: a valid subscription ID
     */
    subscriptionId: string;
    /**
     * The date when the subscription suspension takes effect. See [Suspend Date](https://knowledgecenter.zuora.com/BC_Subscription_Management/Subscriptions/Suspend_a_Subscription#Suspend_Date) for more information.
     *
     * @remarks
     *
     * This field is only required if you suspend an active subscription.
     *
     */
    suspendDate?: Date;
    /**
     *  The date when the new terms and conditions take effect.
     *
     * @remarks
     * This field is only required if the `Type` field is set to `TermsAndConditions`.
     *
     */
    termStartDate?: Date;
    /**
     *  Indicates if the subscription isTERMED or EVERGREEN.
     *
     * @remarks
     *
     * - A TERMED subscription has an expiration date, and must be manually renewed.
     * - An EVERGREEN subscription doesn't have an expiration date, and must be manually ended.
     *
     * When as part of an amendment of type `TermsAndConditions`, this field is required to change the term type of a subscription.
     *
     *
     * **Character limit**: 9
     *
     * **Values**: TERMED, EVERGREEN
     */
    termType?: string;
    /**
     *  The type of amendment.
     *
     * @remarks
     *
     *
     * **Character limit**: 18
     *
     *
     *
     * **Values**: one of the following:
     *
     * - Cancellation
     * - NewProduct
     * - OwnerTransfer (If this value is chosen, the `ContractEffectiveDate`, `ServiceActivationDate`, and `CustomerAcceptanceDate` fields will all be automatically set to today's date, and any values passed from the API are ignored.)
     * - RemoveProduct
     * - Renewal
     * - UpdateProduct
     * - TermsAndConditions
     * - SuspendSubscription
     * - ResumeSubscription
     *
     */
    type: string;
    /**
     *  The ID of the user who last updated the amendment.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     * **Values**: automatically generated
     */
    updatedById?: string;
    /**
     *  The date when the amendment was last updated.
     *
     * @remarks
     *
     *
     * **Values**: automatically generated
     */
    updatedDate?: Date;
}
