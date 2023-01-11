import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteChannelPathParams extends SpeakeasyBase {
    channelId: string;
    userId: string;
}
export declare class DeleteChannelRequest extends SpeakeasyBase {
    pathParams: DeleteChannelPathParams;
}
export declare class DeleteChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteChannel204ApplicationJSONAny?: any;
}
