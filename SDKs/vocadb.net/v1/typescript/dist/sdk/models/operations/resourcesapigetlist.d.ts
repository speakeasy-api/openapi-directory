import { SpeakeasyBase } from "../../../internal/utils";
export declare class ResourcesApiGetListPathParams extends SpeakeasyBase {
    cultureCode: string;
}
export declare class ResourcesApiGetListQueryParams extends SpeakeasyBase {
    setNames: string[];
}
export declare class ResourcesApiGetListRequest extends SpeakeasyBase {
    pathParams: ResourcesApiGetListPathParams;
    queryParams: ResourcesApiGetListQueryParams;
}
export declare class ResourcesApiGetListResponse extends SpeakeasyBase {
    contentType: string;
    resourcesApiGetList200ApplicationJSONObject?: Record<string, Record<string, string>>;
    resourcesApiGetList200TextJSONObject?: Record<string, Record<string, string>>;
    statusCode: number;
}
