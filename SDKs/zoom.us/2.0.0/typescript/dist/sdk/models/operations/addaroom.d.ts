import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddARoomApplicationJsonTypeEnum {
    ZoomRoom = "ZoomRoom",
    SchedulingDisplayOnly = "SchedulingDisplayOnly",
    DigitalSignageOnly = "DigitalSignageOnly"
}
export declare class AddARoomApplicationJson extends SpeakeasyBase {
    locationId?: string;
    name: string;
    type: AddARoomApplicationJsonTypeEnum;
}
export declare enum AddARoomMultipartFormDataTypeEnum {
    ZoomRoom = "ZoomRoom",
    SchedulingDisplayOnly = "SchedulingDisplayOnly",
    DigitalSignageOnly = "DigitalSignageOnly"
}
export declare class AddARoomMultipartFormData extends SpeakeasyBase {
    locationId?: string;
    name: string;
    type: AddARoomMultipartFormDataTypeEnum;
}
export declare class AddARoomRequests extends SpeakeasyBase {
    object?: AddARoomApplicationJson;
    object1?: AddARoomMultipartFormData;
}
export declare class AddARoomSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum AddARoom201ApplicationJsonTypeEnum {
    ZoomRoom = "ZoomRoom",
    SchedulingDisplayOnly = "SchedulingDisplayOnly",
    DigitalSignageOnly = "DigitalSignageOnly"
}
export declare class AddARoom201ApplicationJson extends SpeakeasyBase {
    id?: string;
    locationId?: string;
    name?: string;
    roomId?: string;
    type?: AddARoom201ApplicationJsonTypeEnum;
}
export declare class AddARoomRequest extends SpeakeasyBase {
    request?: AddARoomRequests;
    security: AddARoomSecurity;
}
export declare class AddARoomResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    addARoom201ApplicationJSONObject?: AddARoom201ApplicationJson;
}
