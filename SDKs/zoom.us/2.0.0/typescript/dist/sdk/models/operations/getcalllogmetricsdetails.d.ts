import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCallLogMetricsDetailsPathParams extends SpeakeasyBase {
    callId: string;
}
/**
 * Callee object contains information of the calee.
**/
export declare class GetCallLogMetricsDetails200ApplicationJsonCallee extends SpeakeasyBase {
    codec?: string;
    deviceType?: string;
    extensionNumber?: string;
    headset?: string;
    isp?: string;
    microphone?: string;
    phoneNumber?: string;
    siteId?: string;
}
/**
 * Caller object contains information of the caller.
**/
export declare class GetCallLogMetricsDetails200ApplicationJsonCaller extends SpeakeasyBase {
    codec?: string;
    deviceType?: string;
    extensionNumber?: string;
    headset?: string;
    isp?: string;
    microphone?: string;
    phoneNumber?: string;
    siteId?: string;
}
export declare class GetCallLogMetricsDetails200ApplicationJson extends SpeakeasyBase {
    callId?: string;
    callee?: GetCallLogMetricsDetails200ApplicationJsonCallee;
    caller?: GetCallLogMetricsDetails200ApplicationJsonCaller;
    dateTime?: string;
    direction?: string;
    duration?: number;
    mos?: string;
}
export declare class GetCallLogMetricsDetailsRequest extends SpeakeasyBase {
    pathParams: GetCallLogMetricsDetailsPathParams;
}
export declare class GetCallLogMetricsDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getCallLogMetricsDetails200ApplicationJSONObject?: GetCallLogMetricsDetails200ApplicationJson;
}
