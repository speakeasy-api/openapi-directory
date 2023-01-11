import { SpeakeasyBase } from "../../../internal/utils";
import { SettingValueResponse } from "./settingvalueresponse";
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
    id?: string;
    method?: SettingValueResponseWrapperMethodEnum;
    response?: SettingValueResponse;
    url?: string;
}
