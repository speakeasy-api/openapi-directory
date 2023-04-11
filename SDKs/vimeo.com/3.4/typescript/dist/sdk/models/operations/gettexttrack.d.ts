import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTextTrackRequest extends SpeakeasyBase {
    /**
     * The ID of the text track.
     */
    texttrackId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class GetTextTrackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * Error code 3430: You don't have permission to access this text track.
     *
     * @remarks
     * * Error code 3431: This text track is disabled.
     */
    error?: shared.ErrorT;
    /**
     * * No such video or text track exists.
     *
     * @remarks
     * * Error code 5014: The text track that you specified doesn't exist.
     * * Error code 5015: The text track that you specified belongs to a different video.
     */
    legacyError?: shared.LegacyError;
    /**
     * The text track was returned.
     */
    textTrack?: shared.TextTrack;
}
