import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLiveStreamDetailsPathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare class GetLiveStreamDetails200ApplicationJson extends SpeakeasyBase {
    pageUrl?: string;
    streamKey?: string;
    streamUrl?: string;
}
export declare class GetLiveStreamDetailsRequest extends SpeakeasyBase {
    pathParams: GetLiveStreamDetailsPathParams;
}
export declare class GetLiveStreamDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getLiveStreamDetails200ApplicationJSONObject?: GetLiveStreamDetails200ApplicationJson;
}
