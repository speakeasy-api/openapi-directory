import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTextTrackAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
/**
 * The type of the text track.
 */
export declare enum CreateTextTrackAlt1RequestBodyTypeEnum {
    Captions = "captions",
    Chapters = "chapters",
    Descriptions = "descriptions",
    Metadata = "metadata",
    Subtitles = "subtitles"
}
export declare class CreateTextTrackAlt1RequestBody extends SpeakeasyBase {
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
    type: CreateTextTrackAlt1RequestBodyTypeEnum;
}
export declare class CreateTextTrackAlt1Request extends SpeakeasyBase {
    requestBody: CreateTextTrackAlt1RequestBody;
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class CreateTextTrackAlt1Response extends SpeakeasyBase {
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
