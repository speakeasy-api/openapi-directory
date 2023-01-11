import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AddSettingTemplateApplicationJsonTypeEnum {
    User = "user",
    Group = "group",
    AutoReceptionist = "autoReceptionist",
    Commonarea = "commonarea",
    Interop = "interop"
}
export declare class AddSettingTemplateApplicationJson extends SpeakeasyBase {
    description?: string;
    name: string;
    siteId?: string;
    type: AddSettingTemplateApplicationJsonTypeEnum;
}
export declare enum AddSettingTemplateMultipartFormDataTypeEnum {
    User = "user",
    Group = "group",
    AutoReceptionist = "autoReceptionist",
    Commonarea = "commonarea",
    Interop = "interop"
}
export declare class AddSettingTemplateMultipartFormData extends SpeakeasyBase {
    description?: string;
    name: string;
    siteId?: string;
    type: AddSettingTemplateMultipartFormDataTypeEnum;
}
export declare class AddSettingTemplateRequests extends SpeakeasyBase {
    object?: AddSettingTemplateApplicationJson;
    object1?: AddSettingTemplateMultipartFormData;
}
export declare class AddSettingTemplate201ApplicationJson extends SpeakeasyBase {
    description?: string;
    id?: string;
    name?: string;
    type?: string;
}
export declare class AddSettingTemplateRequest extends SpeakeasyBase {
    request?: AddSettingTemplateRequests;
}
export declare class AddSettingTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    addSettingTemplate201ApplicationJSONObject?: AddSettingTemplate201ApplicationJson;
}
