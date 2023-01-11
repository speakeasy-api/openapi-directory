import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddPhoneDeviceApplicationJson extends SpeakeasyBase {
    assignedTo?: string;
    displayName: string;
    macAddress: string;
    model?: string;
    type?: string;
}
export declare class AddPhoneDeviceMultipartFormData extends SpeakeasyBase {
    assignedTo?: string;
    displayName: string;
    macAddress: string;
    model?: string;
    type?: string;
}
export declare class AddPhoneDeviceRequests extends SpeakeasyBase {
    object?: AddPhoneDeviceApplicationJson;
    object1?: AddPhoneDeviceMultipartFormData;
}
export declare class AddPhoneDeviceSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class AddPhoneDeviceRequest extends SpeakeasyBase {
    request?: AddPhoneDeviceRequests;
    security: AddPhoneDeviceSecurity;
}
export declare class AddPhoneDeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    addPhoneDevice201ApplicationJSONAny?: any;
}
