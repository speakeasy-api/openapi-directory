import { SpeakeasyBase } from "../../../internal/utils";
export declare class PUTSrpRemoveType extends SpeakeasyBase {
    /**
     * Effective date of the new subscription, as yyyy-mm-dd.
     *
     * @remarks
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
     * The date when the remove amendment is activated in yyyy-mm-dd format.
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
}
