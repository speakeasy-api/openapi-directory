import { SpeakeasyBase } from "../../../internal/utils";
import { SettingValueResponse } from "./settingvalueresponse";
/**
 * The HTTP method. It is the same as that of the corresponding request.
 *
 * @remarks
 *
 */
export declare enum SettingValueResponseWrapperMethodEnum {
    Get = "GET",
    Head = "HEAD",
    Post = "POST",
    Put = "PUT",
    Patch = "PATCH",
    Delete = "DELETE",
    Options = "OPTIONS",
    Trace = "TRACE"
}
export declare class SettingValueResponseWrapper extends SpeakeasyBase {
    /**
     * The Id of the corresponding request.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The HTTP method. It is the same as that of the corresponding request.
     *
     * @remarks
     *
     */
    method?: SettingValueResponseWrapperMethodEnum;
    response?: SettingValueResponse;
    /**
     * The url as specified in the corresponding request.
     *
     * @remarks
     *
     */
    url?: string;
}
