import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the text track:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `captions` - The text track is for captions.
 *  * `subtitles` - The text track is for subtitles.
 *
 */
export declare enum TextTrackTypeEnum {
    Captions = "captions",
    Subtitles = "subtitles"
}
/**
 * The text track was added.
 */
export declare class TextTrack extends SpeakeasyBase {
    /**
     * Whether this text track is active.
     */
    active: boolean;
    /**
     * The read-only URL of the text track file, intended for use with HLS playback.
     */
    hlsLink: string;
    /**
     * The time in ISO 8601 format when the read-only HLS playback text track file expires.
     */
    hlsLinkExpiresTime: string;
    /**
     * The language code for this text track. To see a full list, request
     *
     * @remarks
     * `/languages?filter=texttrack`.
     */
    language: string;
    /**
     * The read-only URL of the text track file. You can upload to this link when you create it for the first time.
     */
    link: string;
    /**
     * The time in ISO 8601 format when the text track link expires.
     */
    linkExpiresTime: string;
    /**
     * The descriptive name of this text track.
     */
    name: string;
    /**
     * The type of the text track:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `captions` - The text track is for captions.
     *  * `subtitles` - The text track is for subtitles.
     *
     */
    type: TextTrackTypeEnum;
    /**
     * The relative URI of the text track.
     */
    uri: string;
}
