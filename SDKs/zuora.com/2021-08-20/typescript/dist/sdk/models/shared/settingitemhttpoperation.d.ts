import { SpeakeasyBase } from "../../../internal/utils";
import { SettingItemHttpRequestParameter } from "./settingitemhttprequestparameter";
/**
 * One of the HTTP methods supported by the setting endpoint, for example, GET,PUT,POST or DELETE.
 */
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
    /**
     * One of the HTTP methods supported by the setting endpoint, for example, GET,PUT,POST or DELETE.
     */
    method?: SettingItemHttpOperationMethodEnum;
    /**
     * An array of paramters required by this operation.
     */
    parameters?: SettingItemHttpRequestParameter[];
    /**
     * JSON Schema for the request body of this operation.
     */
    requestType?: Record<string, any>;
    /**
     * JSON Schema for the response body of this operation.
     */
    responseType?: Record<string, any>;
    /**
     * The endpoint url of the operation method. For example, `/settings/billing-rules`.
     */
    url?: string;
}
