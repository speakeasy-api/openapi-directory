import { SpeakeasyBase } from "../../../internal/utils";
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
    body?: Record<string, any>;
    id?: string;
    method?: ChildrenSettingValueRequestMethodEnum;
    url?: string;
}
