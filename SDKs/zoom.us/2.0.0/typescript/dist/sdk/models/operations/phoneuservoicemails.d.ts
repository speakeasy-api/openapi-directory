import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PhoneUserVoiceMailsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum PhoneUserVoiceMailsStatusEnum {
    All = "all",
    Read = "read",
    Unread = "unread"
}
export declare class PhoneUserVoiceMailsQueryParams extends SpeakeasyBase {
    from?: Date;
    nextPageToken?: string;
    pageSize?: number;
    status?: PhoneUserVoiceMailsStatusEnum;
    to: Date;
}
export declare class PhoneUserVoiceMailsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum PhoneUserVoiceMails200ApplicationJsonVoiceMailsStatusEnum {
    Read = "read",
    Unread = "unread"
}
export declare class PhoneUserVoiceMails200ApplicationJsonVoiceMails extends SpeakeasyBase {
    calleeName?: string;
    calleeNumber?: string;
    calleeNumberType?: string;
    callerName?: string;
    callerNumber?: string;
    callerNumberType?: string;
    dateTime?: string;
    downloadUrl?: string;
    duration?: string;
    id?: string;
    status?: PhoneUserVoiceMails200ApplicationJsonVoiceMailsStatusEnum;
}
/**
 * Phone User Voice Mails
**/
export declare class PhoneUserVoiceMails200ApplicationJson extends SpeakeasyBase {
    from?: Date;
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    to?: Date;
    totalRecords?: number;
    voiceMails?: PhoneUserVoiceMails200ApplicationJsonVoiceMails[];
}
export declare class PhoneUserVoiceMailsRequest extends SpeakeasyBase {
    pathParams: PhoneUserVoiceMailsPathParams;
    queryParams: PhoneUserVoiceMailsQueryParams;
    security: PhoneUserVoiceMailsSecurity;
}
export declare class PhoneUserVoiceMailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    phoneUserVoiceMails200ApplicationJSONObject?: PhoneUserVoiceMails200ApplicationJson;
}
