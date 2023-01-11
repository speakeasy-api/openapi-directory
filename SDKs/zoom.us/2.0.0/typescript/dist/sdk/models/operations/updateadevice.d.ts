import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateADevicePathParams extends SpeakeasyBase {
    deviceId: string;
}
export declare class UpdateADeviceApplicationJson extends SpeakeasyBase {
    assignedTo?: string;
    displayName?: string;
    macAddress?: string;
}
export declare class UpdateADeviceMultipartFormData extends SpeakeasyBase {
    assignedTo?: string;
    displayName?: string;
    macAddress?: string;
}
export declare class UpdateADeviceRequests extends SpeakeasyBase {
    object?: UpdateADeviceApplicationJson;
    object1?: UpdateADeviceMultipartFormData;
}
export declare class UpdateADeviceSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateADeviceRequest extends SpeakeasyBase {
    pathParams: UpdateADevicePathParams;
    request?: UpdateADeviceRequests;
    security: UpdateADeviceSecurity;
}
export declare class UpdateADeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateADevice204ApplicationJSONAny?: any;
}
