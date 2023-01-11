import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatePresenceStatusPathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum UpdatePresenceStatusApplicationJsonStatusEnum {
    DoNoDisturb = "Do_No_Disturb",
    Away = "Away",
    Available = "Available"
}
export declare class UpdatePresenceStatusApplicationJson extends SpeakeasyBase {
    duration?: number;
    status?: UpdatePresenceStatusApplicationJsonStatusEnum;
}
export declare enum UpdatePresenceStatusMultipartFormDataStatusEnum {
    DoNoDisturb = "Do_No_Disturb",
    Away = "Away",
    Available = "Available"
}
export declare class UpdatePresenceStatusMultipartFormData extends SpeakeasyBase {
    duration?: number;
    status?: UpdatePresenceStatusMultipartFormDataStatusEnum;
}
export declare class UpdatePresenceStatusRequests extends SpeakeasyBase {
    object?: UpdatePresenceStatusApplicationJson;
    object1?: UpdatePresenceStatusMultipartFormData;
}
export declare class UpdatePresenceStatusRequest extends SpeakeasyBase {
    pathParams: UpdatePresenceStatusPathParams;
    request?: UpdatePresenceStatusRequests;
}
export declare class UpdatePresenceStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updatePresenceStatus204ApplicationJSONAny?: any;
}
