import { SpeakeasyBase } from "../../../internal/utils";
import { SettingItemHttpRequestParameter } from "./settingitemhttprequestparameter";
export declare enum SettingItemHttpOperationMethodEnum {
    Get = "GET",
    Head = "HEAD",
    Post = "POST",
    Put = "PUT",
    Patch = "PATCH",
    Delete = "DELETE",
    Options = "OPTIONS",
    Trace = "TRACE"
}
export declare class SettingItemHttpOperation extends SpeakeasyBase {
    method?: SettingItemHttpOperationMethodEnum;
    parameters?: SettingItemHttpRequestParameter[];
    requestType?: Record<string, any>;
    responseType?: Record<string, any>;
    url?: string;
}
