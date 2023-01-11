import { SpeakeasyBase } from "../../../internal/utils";
export declare class ManageE911signageRequests extends SpeakeasyBase {
    object?: Record<string, any>;
    object1?: Record<string, any>;
}
export declare class ManageE911signage202ApplicationJson extends SpeakeasyBase {
    eventId?: string;
}
export declare class ManageE911signageRequest extends SpeakeasyBase {
    request?: ManageE911signageRequests;
}
export declare class ManageE911signageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    manageE911signage202ApplicationJSONObject?: ManageE911signage202ApplicationJson;
}
