import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CheckIfUserSubscribedToChannelAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
}
export declare class CheckIfUserSubscribedToChannelAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such channel exists.
     */
    legacyError?: shared.LegacyError;
}
