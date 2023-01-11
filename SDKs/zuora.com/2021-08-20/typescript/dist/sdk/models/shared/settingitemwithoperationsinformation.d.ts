import { SpeakeasyBase } from "../../../internal/utils";
import { SettingItemHttpOperation } from "./settingitemhttpoperation";
export declare enum SettingItemWithOperationsInformationContextEnum {
    Tenant = "Tenant",
    Entity = "Entity",
    User = "User",
    None = "None"
}
export declare class SettingItemWithOperationsInformation extends SpeakeasyBase {
    context?: SettingItemWithOperationsInformationContextEnum;
    description?: string;
    httpOperations?: SettingItemHttpOperation[];
    key?: string;
    pathPattern?: string;
}
