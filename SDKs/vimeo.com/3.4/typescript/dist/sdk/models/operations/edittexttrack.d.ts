import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditTextTrackSecurity extends SpeakeasyBase {
    oauth2: string;
}
/**
 * The text track type.
 */
export declare enum EditTextTrackRequestBodyTypeEnum {
    Captions = "captions",
    Chapters = "chapters",
    Descriptions = "descriptions",
    Metadata = "metadata",
    Subtitles = "subtitles"
}
export declare class EditTextTrackRequestBody extends SpeakeasyBase {
    /**
     * Whether the text track is active, meaning that it appears in the player. Only one text track per language, and type, can be active.
     */
    active?: boolean;
    /**
     * The language of the text track. For a full list of valid languages, use the [/languages?filter=texttracks](https://developer.vimeo.com/api/endpoints/videos#GET/languages) endpoint.
     */
    language?: string;
    /**
     * The name of the text track.
     */
    name?: string;
    /**
     * The text track type.
     */
    type?: EditTextTrackRequestBodyTypeEnum;
}
export declare class EditTextTrackRequest extends SpeakeasyBase {
    requestBody?: EditTextTrackRequestBody;
    /**
     * The ID of the text track.
     */
    texttrackId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class EditTextTrackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * The authenticated user can't edit the text track.
     *
     * @remarks
     * * Error code 2204: There are errors in the request.
     * * Error code 3430: You don't have permission to access this text track.
     * * Error code 3431: This text track is disabled.
     */
    legacyError?: shared.LegacyError;
    /**
     * The text track was edited.
     */
    textTrack?: shared.TextTrack;
}
