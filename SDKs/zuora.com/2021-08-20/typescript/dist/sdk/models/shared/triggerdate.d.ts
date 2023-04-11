import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Name of the trigger date of the order action.
 *
 * @remarks
 *
 */
export declare enum TriggerDateNameEnum {
    ContractEffective = "ContractEffective",
    ServiceActivation = "ServiceActivation",
    CustomerAcceptance = "CustomerAcceptance"
}
export declare class TriggerDate extends SpeakeasyBase {
    /**
     * Name of the trigger date of the order action.
     *
     * @remarks
     *
     */
    name?: TriggerDateNameEnum;
    /**
     * Trigger date in YYYY-MM-DD format.
     *
     * @remarks
     *
     */
    triggerDate?: Date;
}
