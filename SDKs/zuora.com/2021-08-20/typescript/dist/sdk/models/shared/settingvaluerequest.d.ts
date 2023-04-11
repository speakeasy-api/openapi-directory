import { SpeakeasyBase } from "../../../internal/utils";
import { ChildrenSettingValueRequest } from "./childrensettingvaluerequest";
/**
 * One of the HTTP methods supported by the setting endpoint, for example, GET,PUT,POST or DELETE.
 *
 * @remarks
 *
 */
export declare enum SettingValueRequestMethodEnum {
    Get = "GET",
    Head = "HEAD",
    Post = "POST",
    Put = "PUT",
    Patch = "PATCH",
    Delete = "DELETE",
    Options = "OPTIONS",
    Trace = "TRACE"
}
export declare class SettingValueRequest extends SpeakeasyBase {
    /**
     * Request payload if any
     */
    body?: Record<string, any>;
    /**
     * An array of requests that can only be executed after its parent request has been executed successfully.
     *
     * @remarks
     *
     */
    children?: ChildrenSettingValueRequest[];
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
    method?: SettingValueRequestMethodEnum;
    /**
     * The relative URL of the setting. It is the same as in the `pathPattern` field in the response body of [Listing all Settings](https://www.zuora.com/developer/api-reference/#operation/GET_ListAllSettings). For example, `/billing-rules`.
     *
     * @remarks
     *
     */
    url?: string;
}
