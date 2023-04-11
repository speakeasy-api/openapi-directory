import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTextTracksRequest extends SpeakeasyBase {
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class GetTextTracksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such video exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The text tracks were returned.
     */
    textTracks?: shared.TextTrack[];
}
