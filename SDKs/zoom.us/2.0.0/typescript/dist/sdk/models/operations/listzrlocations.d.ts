import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListZrLocationsQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    parentLocationId?: string;
    type?: string;
}
export declare class ListZrLocationsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum ListZrLocations200ApplicationJsonLocationsTypeEnum {
    Country = "country",
    States = "states",
    City = "city",
    Campus = "campus",
    Building = "building",
    Floor = "floor"
}
export declare class ListZrLocations200ApplicationJsonLocations extends SpeakeasyBase {
    id?: string;
    name?: string;
    parentLocationId?: string;
    type?: ListZrLocations200ApplicationJsonLocationsTypeEnum;
}
export declare class ListZrLocations200ApplicationJson extends SpeakeasyBase {
    locations?: ListZrLocations200ApplicationJsonLocations[];
    nextPageToken?: string;
    pageSize?: number;
}
export declare class ListZrLocationsRequest extends SpeakeasyBase {
    queryParams: ListZrLocationsQueryParams;
    security: ListZrLocationsSecurity;
}
export declare class ListZrLocationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listZRLocations200ApplicationJSONObject?: ListZrLocations200ApplicationJson;
}
