import { SpeakeasyBase } from "../../../internal/utils";
import { SettingItemHttpOperation } from "./settingitemhttpoperation";
/**
 * The context where this setting item is effective.
 */
export declare enum SettingItemWithOperationsInformationContextEnum {
    Tenant = "Tenant",
    Entity = "Entity",
    User = "User",
    None = "None"
}
export declare class SettingItemWithOperationsInformation extends SpeakeasyBase {
    /**
     * The context where this setting item is effective.
     */
    context?: SettingItemWithOperationsInformationContextEnum;
    /**
     * The description of the setting item as you see from Zuora UI.
     */
    description?: string;
    /**
     * An array of HTTP operation methods that are supported on this setting endpoint.
     */
    httpOperations?: SettingItemHttpOperation[];
    /**
     * The unique key to distinguish the setting item.
     */
    key?: string;
    /**
     * The path pattern of the setting endpoint, relative to `/settings`. For example, `/billing-rules`.
     */
    pathPattern?: string;
}
