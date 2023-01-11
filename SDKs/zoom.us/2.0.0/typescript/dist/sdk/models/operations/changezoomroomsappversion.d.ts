import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChangeZoomRoomsAppVersionPathParams extends SpeakeasyBase {
    deviceId: string;
    roomId: string;
}
export declare enum ChangeZoomRoomsAppVersionApplicationJsonActionEnum {
    Upgrade = "upgrade",
    Downgrade = "downgrade",
    Cancel = "cancel"
}
export declare class ChangeZoomRoomsAppVersionApplicationJson extends SpeakeasyBase {
    action?: ChangeZoomRoomsAppVersionApplicationJsonActionEnum;
}
export declare enum ChangeZoomRoomsAppVersionMultipartFormDataActionEnum {
    Upgrade = "upgrade",
    Downgrade = "downgrade",
    Cancel = "cancel"
}
export declare class ChangeZoomRoomsAppVersionMultipartFormData extends SpeakeasyBase {
    action?: ChangeZoomRoomsAppVersionMultipartFormDataActionEnum;
}
export declare class ChangeZoomRoomsAppVersionRequests extends SpeakeasyBase {
    object?: ChangeZoomRoomsAppVersionApplicationJson;
    object1?: ChangeZoomRoomsAppVersionMultipartFormData;
}
export declare class ChangeZoomRoomsAppVersionRequest extends SpeakeasyBase {
    pathParams: ChangeZoomRoomsAppVersionPathParams;
    request?: ChangeZoomRoomsAppVersionRequests;
}
export declare class ChangeZoomRoomsAppVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    changeZoomRoomsAppVersion204ApplicationJSONAny?: any;
}
