import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCallLogMetricsDetailsRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the phone call. The value of this field can be retrieved from [List Call Logs]() API.
     */
    callId: string;
}
/**
 * Callee object contains information of the calee.
 */
export declare class GetCallLogMetricsDetails200ApplicationXMLCallee extends SpeakeasyBase {
    /**
     * Audio codec.
     */
    codec?: string;
    /**
     * Device type.
     */
    deviceType?: string;
    /**
     * Full extension number of the callee.
     */
    extensionNumber?: string;
    /**
     * Headset used for the call by the callee.
     */
    headset?: string;
    /**
     * ISP.
     */
    isp?: string;
    /**
     * Microphone used for the call by the callee.
     */
    microphone?: string;
    /**
     * Phone number of the callee in E164 format.
     */
    phoneNumber?: string;
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-multiple-sites).
     */
    siteId?: string;
}
/**
 * Caller object contains information of the caller.
 */
export declare class GetCallLogMetricsDetails200ApplicationXMLCaller extends SpeakeasyBase {
    /**
     * Audio codec.
     */
    codec?: string;
    /**
     * Device type.
     */
    deviceType?: string;
    /**
     * Full extension number of the caller.
     */
    extensionNumber?: string;
    /**
     * Headset used for the call by the caller.
     */
    headset?: string;
    /**
     * ISP.
     */
    isp?: string;
    /**
     * Microphone used for the call by the caller.
     */
    microphone?: string;
    /**
     * Phone number of the caller in E164 format.
     */
    phoneNumber?: string;
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-multiple-sites).
     */
    siteId?: string;
}
export declare class GetCallLogMetricsDetails200ApplicationXML extends SpeakeasyBase {
    /**
     * Unique identifier of the phone call.
     */
    callId?: string;
    /**
     * Callee object contains information of the calee.
     */
    callee?: GetCallLogMetricsDetails200ApplicationXMLCallee;
    /**
     * Caller object contains information of the caller.
     */
    caller?: GetCallLogMetricsDetails200ApplicationXMLCaller;
    /**
     * Date and time at which the call started.
     */
    dateTime?: string;
    /**
     * Direction of the call. The value of this field can be either `internal` or `outbound`.
     */
    direction?: string;
    /**
     * Duration of the call in seconds.
     */
    duration?: number;
    /**
     * Zoom uses Mean Opinion Score (MOS) as the main measurement to report on voice quality. MOS measures voice quality on a scale of 1 to 5. A score of 1 indicates unacceptable voice quality for all users. A score of 5 is the best voice quality.
     */
    mos?: string;
}
/**
 * Callee object contains information of the calee.
 */
export declare class GetCallLogMetricsDetails200ApplicationJSONCallee extends SpeakeasyBase {
    /**
     * Audio codec.
     */
    codec?: string;
    /**
     * Device type.
     */
    deviceType?: string;
    /**
     * Full extension number of the callee.
     */
    extensionNumber?: string;
    /**
     * Headset used for the call by the callee.
     */
    headset?: string;
    /**
     * ISP.
     */
    isp?: string;
    /**
     * Microphone used for the call by the callee.
     */
    microphone?: string;
    /**
     * Phone number of the callee in E164 format.
     */
    phoneNumber?: string;
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-multiple-sites).
     */
    siteId?: string;
}
/**
 * Caller object contains information of the caller.
 */
export declare class GetCallLogMetricsDetails200ApplicationJSONCaller extends SpeakeasyBase {
    /**
     * Audio codec.
     */
    codec?: string;
    /**
     * Device type.
     */
    deviceType?: string;
    /**
     * Full extension number of the caller.
     */
    extensionNumber?: string;
    /**
     * Headset used for the call by the caller.
     */
    headset?: string;
    /**
     * ISP.
     */
    isp?: string;
    /**
     * Microphone used for the call by the caller.
     */
    microphone?: string;
    /**
     * Phone number of the caller in E164 format.
     */
    phoneNumber?: string;
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-multiple-sites).
     */
    siteId?: string;
}
export declare class GetCallLogMetricsDetails200ApplicationJSON extends SpeakeasyBase {
    /**
     * Unique identifier of the phone call.
     */
    callId?: string;
    /**
     * Callee object contains information of the calee.
     */
    callee?: GetCallLogMetricsDetails200ApplicationJSONCallee;
    /**
     * Caller object contains information of the caller.
     */
    caller?: GetCallLogMetricsDetails200ApplicationJSONCaller;
    /**
     * Date and time at which the call started.
     */
    dateTime?: string;
    /**
     * Direction of the call. The value of this field can be either `internal` or `outbound`.
     */
    direction?: string;
    /**
     * Duration of the call in seconds.
     */
    duration?: number;
    /**
     * Zoom uses Mean Opinion Score (MOS) as the main measurement to report on voice quality. MOS measures voice quality on a scale of 1 to 5. A score of 1 indicates unacceptable voice quality for all users. A score of 5 is the best voice quality.
     */
    mos?: string;
}
export declare class GetCallLogMetricsDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getCallLogMetricsDetails200ApplicationJSONObject?: GetCallLogMetricsDetails200ApplicationJSON;
}
