import { SpeakeasyBase } from "../../../internal/utils";
/**
 * One of the HTTP methods supported by the setting endpoint, for example, GET,PUT,POST or DELETE.
 *
 * @remarks
 *
 */
export declare enum ChildrenSettingValueRequestMethodEnum {
    Get = "GET",
    Head = "HEAD",
    Post = "POST",
    Put = "PUT",
    Patch = "PATCH",
    Delete = "DELETE",
    Options = "OPTIONS",
    Trace = "TRACE"
}
export declare class ChildrenSettingValueRequest extends SpeakeasyBase {
    /**
     * Request payload if any
     */
    body?: Record<string, any>;
    /**
     * The id of the request. You can set it to any string. It must be unique within the whole batch.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * One of the HTTP methods supported by the setting endpoint, for example, GET,PUT,POST or DELETE.
     *
     * @remarks
     *
     */
    method?: ChildrenSettingValueRequestMethodEnum;
    /**
     * The relative URL of the setting. It is the same as in the `pathPattern` field in the response body of [Listing all settings](https://www.zuora.com/developer/api-reference/#operation/GET_ListAllSettings). For example, `/billing-rules`.
     *
     * @remarks
     *
     */
    url?: string;
}
