import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Condition for the charge to become active.
 *
 * @remarks
 *
 * If the value of this field is `SpecificDate`, use the `specificTriggerDate` field to specify the date when the charge becomes active.
 *
 */
export declare enum PreviewOrderTriggerParamsTriggerEventEnum {
    ContractEffective = "ContractEffective",
    ServiceActivation = "ServiceActivation",
    CustomerAcceptance = "CustomerAcceptance",
    SpecificDate = "SpecificDate"
}
/**
 * Specifies when a charge becomes active.
 *
 * @remarks
 *
 */
export declare class PreviewOrderTriggerParams extends SpeakeasyBase {
    /**
     * Date in YYYY-MM-DD format. Only applicable if the value of the `triggerEvent` field is `SpecificDate`.
     *
     * @remarks
     *
     * While this field is applicable, if this field is not set, your `CreateSubscription` order action creates a `Pending` order and a `Pending Acceptance` subscription. If at the same time the service activation date is required and not set, a `Pending Activation` subscription is created.
     *
     */
    specificTriggerDate?: Date;
    /**
     * Condition for the charge to become active.
     *
     * @remarks
     *
     * If the value of this field is `SpecificDate`, use the `specificTriggerDate` field to specify the date when the charge becomes active.
     *
     */
    triggerEvent?: PreviewOrderTriggerParamsTriggerEventEnum;
}
