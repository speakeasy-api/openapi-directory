import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTextTrackSecurity extends SpeakeasyBase {
    oauth2: string;
}
/**
 * The type of the text track.
 */
export declare enum CreateTextTrackRequestBodyTypeEnum {
    Captions = "captions",
    Chapters = "chapters",
    Descriptions = "descriptions",
    Metadata = "metadata",
    Subtitles = "subtitles"
}
export declare class CreateTextTrackRequestBody extends SpeakeasyBase {
    /**
     * Active text tracks appear in the player and are visible to other users. Only one text track per language can be active.
     */
    active?: boolean;
    /**
     * The language of the text track. For a complete list of valid languages, use the [/languages?filter=texttracks](https://developer.vimeo.com/api/endpoints/videos#GET/languages) endpoint.
     */
    language: string;
    /**
     * The name of the text track.
     */
    name: string;
    /**
     * The type of the text track.
     */
    type: CreateTextTrackRequestBodyTypeEnum;
}
export declare class CreateTextTrackRequest extends SpeakeasyBase {
    requestBody: CreateTextTrackRequestBody;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class CreateTextTrackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * The authenticated user can't edit the text track.
     *
     * @remarks
     * * Error code 2204: The request contains errors.
     */
    legacyError?: shared.LegacyError;
    /**
     * The text track was added.
     */
    textTrack?: shared.TextTrack;
}
