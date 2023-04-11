import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPhoneRecordingsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetPhoneRecordingsRequest extends SpeakeasyBase {
    /**
     * Start date and time in **yyyy-mm-dd** format or **yyyy-MM-dd’T’HH:mm:ss’Z’** format. The date range defined by the from and to parameters should only be one month as the report includes only one month worth of data at once.
     *
     * @remarks
     *
     */
    from?: string;
    /**
     * The current page number of returned records.
     */
    nextPageToken?: string;
    /**
     * The owner type. The allowed values are null, `user`, or `callQueue`. The default is null. If null, returns all owner types.
     *
     * @remarks
     *
     */
    ownerType?: string;
    /**
     * The number of records returned within a single API call. The default is **30**, and the maximum is **100**.
     */
    pageSize?: number;
    /**
     * The recording type. The allowed values are null, `OnDemand`, or `Automatic`. The default is null. If null, returns all recording types.
     *
     * @remarks
     *
     */
    recordingType?: string;
    /**
     * The site ID. The default is `All sites`.
     */
    siteId?: string;
    /**
     * End date and time in **yyyy-mm-dd** format or **yyyy-MM-dd’T’HH:mm:ss’Z’** format, the same formats supported by the `from` parameter.
     *
     * @remarks
     *
     *
     */
    to?: string;
}
/**
 * Specifies the callee' number type.<br>
 *
 * @remarks
 * `1` - internal<br>
 * `2` - external<br>
 */
export declare enum GetPhoneRecordings200ApplicationXMLRecordingsCalleeNumberTypeEnum {
    One = "1",
    Two = "2"
}
/**
 * Specifies the type of the caller number.<br>
 *
 * @remarks
 *
 * `1` - internal<br>
 * `2` - external<br>
 */
export declare enum GetPhoneRecordings200ApplicationXMLRecordingsCallerNumberTypeEnum {
    One = "1",
    Two = "2"
}
/**
 * The direction of the call. Values: `inbound` or `outbound`.
 */
export declare enum GetPhoneRecordings200ApplicationXMLRecordingsDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
/**
 * The owner type: `user` or `call queue`.
 */
export declare enum GetPhoneRecordings200ApplicationXMLRecordingsOwnerTypeEnum {
    User = "user",
    CallQueue = "call queue"
}
/**
 * The owner of the recording.
 */
export declare class GetPhoneRecordings200ApplicationXMLRecordingsOwner extends SpeakeasyBase {
    /**
     * The extension number associated to the call number.
     */
    extensionNumber?: string;
    /**
     * The owner's ID.
     */
    id?: string;
    /**
     * Name of the owner.
     */
    name?: string;
    /**
     * The owner type: `user` or `call queue`.
     */
    type?: GetPhoneRecordings200ApplicationXMLRecordingsOwnerTypeEnum;
}
export declare class GetPhoneRecordings200ApplicationXMLRecordingsSite extends SpeakeasyBase {
    /**
     * The site ID.
     */
    id?: string;
    /**
     * The site name.
     */
    name?: string;
}
export declare class GetPhoneRecordings200ApplicationXMLRecordings extends SpeakeasyBase {
    /**
     * The contact name of the callee.
     */
    calleeName?: string;
    /**
     * The phone number of the callee.
     */
    calleeNumber?: string;
    /**
     * Specifies the callee' number type.<br>
     *
     * @remarks
     * `1` - internal<br>
     * `2` - external<br>
     */
    calleeNumberType?: GetPhoneRecordings200ApplicationXMLRecordingsCalleeNumberTypeEnum;
    /**
     * The contact name of the caller.
     */
    callerName?: string;
    /**
     * The phone number associated to the caller.
     */
    callerNumber?: string;
    /**
     * Specifies the type of the caller number.<br>
     *
     * @remarks
     *
     * `1` - internal<br>
     * `2` - external<br>
     */
    callerNumberType?: GetPhoneRecordings200ApplicationXMLRecordingsCallerNumberTypeEnum;
    /**
     * The date and time when the recording was received.
     */
    dateTime?: Date;
    /**
     * The direction of the call. Values: `inbound` or `outbound`.
     */
    direction?: GetPhoneRecordings200ApplicationXMLRecordingsDirectionEnum;
    /**
     * The download URL for the recording.
     */
    downloadUrl?: string;
    /**
     * The duration of the recording.
     */
    duration?: number;
    /**
     * Unique identifier of the recording.
     */
    id?: string;
    /**
     * The owner of the recording.
     */
    owner?: GetPhoneRecordings200ApplicationXMLRecordingsOwner;
    /**
     * The recording type. The allowed values are `OnDemand` or `Automatic`.
     */
    recordingType?: string;
    site?: GetPhoneRecordings200ApplicationXMLRecordingsSite;
}
/**
 * **HTTP Status Code** `200`<br>
 *
 * @remarks
 * OK.
 */
export declare class GetPhoneRecordings200ApplicationXML extends SpeakeasyBase {
    /**
     * The current page number of returned records.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call. The default is **30**, and the maximum is **100**.
     */
    pageSize?: number;
    recordings?: GetPhoneRecordings200ApplicationXMLRecordings[];
    /**
     * Total number of records returned.
     */
    totalRecords?: number;
}
/**
 * Specifies the callee' number type.<br>
 *
 * @remarks
 * `1` - internal<br>
 * `2` - external<br>
 */
export declare enum GetPhoneRecordings200ApplicationJSONRecordingsCalleeNumberTypeEnum {
    One = "1",
    Two = "2"
}
/**
 * Specifies the type of the caller number.<br>
 *
 * @remarks
 *
 * `1` - internal<br>
 * `2` - external<br>
 */
export declare enum GetPhoneRecordings200ApplicationJSONRecordingsCallerNumberTypeEnum {
    One = "1",
    Two = "2"
}
/**
 * The direction of the call. Values: `inbound` or `outbound`.
 */
export declare enum GetPhoneRecordings200ApplicationJSONRecordingsDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
/**
 * The owner type: `user` or `call queue`.
 */
export declare enum GetPhoneRecordings200ApplicationJSONRecordingsOwnerTypeEnum {
    User = "user",
    CallQueue = "call queue"
}
/**
 * The owner of the recording.
 */
export declare class GetPhoneRecordings200ApplicationJSONRecordingsOwner extends SpeakeasyBase {
    /**
     * The extension number associated to the call number.
     */
    extensionNumber?: string;
    /**
     * The owner's ID.
     */
    id?: string;
    /**
     * Name of the owner.
     */
    name?: string;
    /**
     * The owner type: `user` or `call queue`.
     */
    type?: GetPhoneRecordings200ApplicationJSONRecordingsOwnerTypeEnum;
}
export declare class GetPhoneRecordings200ApplicationJSONRecordingsSite extends SpeakeasyBase {
    /**
     * The site ID.
     */
    id?: string;
    /**
     * The site name.
     */
    name?: string;
}
export declare class GetPhoneRecordings200ApplicationJSONRecordings extends SpeakeasyBase {
    /**
     * The contact name of the callee.
     */
    calleeName?: string;
    /**
     * The phone number of the callee.
     */
    calleeNumber?: string;
    /**
     * Specifies the callee' number type.<br>
     *
     * @remarks
     * `1` - internal<br>
     * `2` - external<br>
     */
    calleeNumberType?: GetPhoneRecordings200ApplicationJSONRecordingsCalleeNumberTypeEnum;
    /**
     * The contact name of the caller.
     */
    callerName?: string;
    /**
     * The phone number associated to the caller.
     */
    callerNumber?: string;
    /**
     * Specifies the type of the caller number.<br>
     *
     * @remarks
     *
     * `1` - internal<br>
     * `2` - external<br>
     */
    callerNumberType?: GetPhoneRecordings200ApplicationJSONRecordingsCallerNumberTypeEnum;
    /**
     * The date and time when the recording was received.
     */
    dateTime?: Date;
    /**
     * The direction of the call. Values: `inbound` or `outbound`.
     */
    direction?: GetPhoneRecordings200ApplicationJSONRecordingsDirectionEnum;
    /**
     * The download URL for the recording.
     */
    downloadUrl?: string;
    /**
     * The duration of the recording.
     */
    duration?: number;
    /**
     * Unique identifier of the recording.
     */
    id?: string;
    /**
     * The owner of the recording.
     */
    owner?: GetPhoneRecordings200ApplicationJSONRecordingsOwner;
    /**
     * The recording type. The allowed values are `OnDemand` or `Automatic`.
     */
    recordingType?: string;
    site?: GetPhoneRecordings200ApplicationJSONRecordingsSite;
}
/**
 * **HTTP Status Code** `200`<br>
 *
 * @remarks
 * OK.
 */
export declare class GetPhoneRecordings200ApplicationJSON extends SpeakeasyBase {
    /**
     * The current page number of returned records.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call. The default is **30**, and the maximum is **100**.
     */
    pageSize?: number;
    recordings?: GetPhoneRecordings200ApplicationJSONRecordings[];
    /**
     * Total number of records returned.
     */
    totalRecords?: number;
}
export declare class GetPhoneRecordingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code** `200`<br>
     *
     * @remarks
     * OK.
     */
    getPhoneRecordings200ApplicationJSONObject?: GetPhoneRecordings200ApplicationJSON;
    /**
     * **HTTP Response Code:** `400`<br>
     *
     * @remarks
     * The template name you entered already exists. Provide a new name for the template and try again.<br>
     *
     * **Error Code:** `300`<br>
     * Validation failed. You provided an incorrect value for the template type. Provide a valid value and try again.
     */
    getPhoneRecordings400ApplicationJSONAny?: any;
}
