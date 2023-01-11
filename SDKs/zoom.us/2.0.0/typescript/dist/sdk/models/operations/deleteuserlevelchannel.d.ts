import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteUserLevelChannelPathParams extends SpeakeasyBase {
    channelId: string;
}
export declare class DeleteUserLevelChannelRequest extends SpeakeasyBase {
    pathParams: DeleteUserLevelChannelPathParams;
}
export declare class DeleteUserLevelChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteUserLevelChannel204ApplicationJSONAny?: any;
}
