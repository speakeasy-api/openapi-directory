import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateOrderUpdateProductTriggerParamsTriggerEventEnum {
    ContractEffective = "ContractEffective",
    ServiceActivation = "ServiceActivation",
    CustomerAcceptance = "CustomerAcceptance",
    SpecificDate = "SpecificDate"
}
/**
 * Specifies when a charge becomes active.
 *
**/
export declare class CreateOrderUpdateProductTriggerParams extends SpeakeasyBase {
    specificTriggerDate?: Date;
    triggerEvent?: CreateOrderUpdateProductTriggerParamsTriggerEventEnum;
}
