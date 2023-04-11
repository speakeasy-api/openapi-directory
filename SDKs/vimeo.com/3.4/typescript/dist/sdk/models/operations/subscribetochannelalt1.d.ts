import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubscribeToChannelAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class SubscribeToChannelAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
}
export declare class SubscribeToChannelAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such channel exists.
     */
    legacyError?: shared.LegacyError;
}
