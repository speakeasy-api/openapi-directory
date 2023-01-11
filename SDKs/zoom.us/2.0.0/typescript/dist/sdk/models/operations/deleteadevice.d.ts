import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteADevicePathParams extends SpeakeasyBase {
    deviceId: string;
}
export declare class DeleteADeviceSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DeleteADeviceRequest extends SpeakeasyBase {
    pathParams: DeleteADevicePathParams;
    security: DeleteADeviceSecurity;
}
export declare class DeleteADeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteADevice204ApplicationJSONAny?: any;
}
