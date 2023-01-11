import { SpeakeasyBase } from "../../../internal/utils";
import { ChildrenSettingValueRequest } from "./childrensettingvaluerequest";
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
    body?: Record<string, any>;
    children?: ChildrenSettingValueRequest[];
    id?: string;
    method?: SettingValueRequestMethodEnum;
    url?: string;
}
