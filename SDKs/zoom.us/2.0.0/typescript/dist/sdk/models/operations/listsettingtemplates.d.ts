import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSettingTemplatesQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    siteId?: string;
}
export declare class ListSettingTemplatesSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum ListSettingTemplates200ApplicationJsonTemplatesTypeEnum {
    User = "user",
    Group = "group",
    AutReceptionist = "autReceptionist",
    CommonArea = "commonArea",
    Zr = "zr",
    Interop = "interop"
}
export declare class ListSettingTemplates200ApplicationJsonTemplates extends SpeakeasyBase {
    description?: string;
    id?: string;
    name?: string;
    type?: ListSettingTemplates200ApplicationJsonTemplatesTypeEnum;
}
export declare class ListSettingTemplates200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    templates?: ListSettingTemplates200ApplicationJsonTemplates[];
    totalRecords?: number;
}
export declare class ListSettingTemplatesRequest extends SpeakeasyBase {
    queryParams: ListSettingTemplatesQueryParams;
    security: ListSettingTemplatesSecurity;
}
export declare class ListSettingTemplatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listSettingTemplates200ApplicationJSONObject?: ListSettingTemplates200ApplicationJson;
}
