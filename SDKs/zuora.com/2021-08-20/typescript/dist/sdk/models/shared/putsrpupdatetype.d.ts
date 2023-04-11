import { SpeakeasyBase } from "../../../internal/utils";
import { PUTScUpdateType } from "./putscupdatetype";
/**
 * Container for custom fields of a Rate Plan object.
 *
 * @remarks
 *
 */
export declare class PUTSrpUpdateType extends SpeakeasyBase {
    /**
     * Container for one or more product rate plan charges.
     *
     * @remarks
     *
     */
    chargeUpdateDetails?: PUTScUpdateType[];
    /**
     * The date when the amendment changes take effect. The format of the date is yyyy-mm-dd.
     *
     * @remarks
     *
     * If there is already a future-dated Update Product amendment on the subscription, the `specificUpdateDate` field will be used instead of this field to specify when the Update Product amendment takes effect.
     *
     */
    contractEffectiveDate: Date;
    /**
     * The date when the customer accepts the contract in yyyy-mm-dd format.
     *
     * @remarks
     *
     * If this field is not set:
     *
     * * If the `serviceActivationDate` field is not set, the value of this field is set to be the contract effective date.
     * * If the `serviceActivationDate` field is set, the value of this field is set to be the service activation date.
     *
     * The billing trigger dates must follow this rule:
     *
     * contractEffectiveDate <= serviceActivationDate <= contractAcceptanceDate
     *
     */
    customerAcceptanceDate?: Date;
    /**
     * ID of a rate plan for this subscription.
     *
     * @remarks
     *
     */
    ratePlanId: string;
    /**
     * The date when the update amendment is activated in yyyy-mm-dd format.
     *
     * @remarks
     *
     * You must specify a Service Activation date if the Customer Acceptance date is set. If the Customer Acceptance date is not set, the value of the `serviceActivationDate` field defaults to be the Contract Effective Date.
     *
     * The billing trigger dates must follow this rule:
     *
     * contractEffectiveDate <= serviceActivationDate <= contractAcceptanceDate
     *
     */
    serviceActivationDate?: Date;
    /**
     * The date when the Update Product amendment takes effect. This field is only applicable if there is already a future-dated Update Product amendment on the subscription. The format of the date is yyyy-mm-dd.
     *
     * @remarks
     *
     * Required only for Update Product amendments if there is already a future-dated Update Product amendment on the subscription.
     *
     */
    specificUpdateDate?: Date;
}
