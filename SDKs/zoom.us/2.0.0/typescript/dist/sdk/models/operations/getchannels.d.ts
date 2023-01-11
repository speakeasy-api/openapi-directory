import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetChannelsQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
}
export declare class GetChannelsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GetChannels200ApplicationJsonChannelsChannelsSettings extends SpeakeasyBase {
    allowToAddExternalUsers?: number;
    newMembersCanSeePreviousMessagesFiles?: boolean;
    postingPermissions?: number;
}
export declare class GetChannels200ApplicationJsonChannels extends SpeakeasyBase {
    channelsSettings?: GetChannels200ApplicationJsonChannelsChannelsSettings;
    id?: string;
    name?: string;
    type?: number;
}
export declare class GetChannels200ApplicationJson extends SpeakeasyBase {
    channels?: GetChannels200ApplicationJsonChannels[];
    nextPageToken?: string;
    pageSize?: number;
    totalRecords?: number;
}
export declare class GetChannelsRequest extends SpeakeasyBase {
    pathParams: GetChannelsPathParams;
    queryParams: GetChannelsQueryParams;
    security: GetChannelsSecurity;
}
export declare class GetChannelsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getChannels200ApplicationJSONObject?: GetChannels200ApplicationJson;
}
