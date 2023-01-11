import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddAzrLocationApplicationJson extends SpeakeasyBase {
    name?: string;
    parentLocationId?: string;
}
export declare class AddAzrLocationMultipartFormData extends SpeakeasyBase {
    name?: string;
    parentLocationId?: string;
}
export declare class AddAzrLocationRequests extends SpeakeasyBase {
    object?: AddAzrLocationApplicationJson;
    object1?: AddAzrLocationMultipartFormData;
}
export declare class AddAzrLocationSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum AddAzrLocation200ApplicationJsonTypeEnum {
    Country = "country",
    States = "states",
    City = "city",
    Campus = "campus",
    Building = "building",
    Floor = "floor"
}
export declare class AddAzrLocation200ApplicationJson extends SpeakeasyBase {
    id?: string;
    name?: string;
    parentLocationId?: string;
    type?: AddAzrLocation200ApplicationJsonTypeEnum;
}
export declare class AddAzrLocationRequest extends SpeakeasyBase {
    request?: AddAzrLocationRequests;
    security: AddAzrLocationSecurity;
}
export declare class AddAzrLocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    addAZRLocation200ApplicationJSONObject?: AddAzrLocation200ApplicationJson;
}
