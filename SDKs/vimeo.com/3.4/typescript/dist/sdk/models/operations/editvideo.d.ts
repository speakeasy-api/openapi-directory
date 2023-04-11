import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditVideoSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class EditVideoRequestBodyEmbedButtons extends SpeakeasyBase {
    /**
     * Show or hide the Embed button.
     */
    embed?: boolean;
    /**
     * Show or hide the Fullscreen button.
     */
    fullscreen?: boolean;
    /**
     * Show or hide the HD button.
     */
    hd?: boolean;
    /**
     * Show or hide the Like button.
     */
    like?: boolean;
    /**
     * Show or hide the Scaling button (shown only in Fullscreen mode).
     */
    scaling?: boolean;
    /**
     * Show or hide the Share button.
     */
    share?: boolean;
    /**
     * Show or hide the Watch Later button.
     */
    watchlater?: boolean;
}
export declare class EditVideoRequestBodyEmbedLogosCustom extends SpeakeasyBase {
    /**
     * Show or hide your custom logo.
     */
    active?: boolean;
    /**
     * The URL that loads when the user clicks your custom logo.
     */
    link?: string;
    /**
     * Whether always to show the custom logo or to hide it after time with the rest of the UI.
     */
    sticky?: boolean;
}
export declare class EditVideoRequestBodyEmbedLogos extends SpeakeasyBase {
    custom?: EditVideoRequestBodyEmbedLogosCustom;
    /**
     * Show or hide the Vimeo logo.
     */
    vimeo?: boolean;
}
/**
 * Show or hide the video title, or enable the user to determine whether the video title appears.
 */
export declare enum EditVideoRequestBodyEmbedTitleNameEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
/**
 * Show or hide the owner information, or enable the user to determine whether the owner information appears.
 */
export declare enum EditVideoRequestBodyEmbedTitleOwnerEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
/**
 * Show or hide the owner portrait, or enable the user to determine whether the owner portrait appears.
 */
export declare enum EditVideoRequestBodyEmbedTitlePortraitEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
export declare class EditVideoRequestBodyEmbedTitle extends SpeakeasyBase {
    /**
     * Show or hide the video title, or enable the user to determine whether the video title appears.
     */
    name?: EditVideoRequestBodyEmbedTitleNameEnum;
    /**
     * Show or hide the owner information, or enable the user to determine whether the owner information appears.
     */
    owner?: EditVideoRequestBodyEmbedTitleOwnerEnum;
    /**
     * Show or hide the owner portrait, or enable the user to determine whether the owner portrait appears.
     */
    portrait?: EditVideoRequestBodyEmbedTitlePortraitEnum;
}
export declare class EditVideoRequestBodyEmbed extends SpeakeasyBase {
    buttons?: EditVideoRequestBodyEmbedButtons;
    /**
     * The main color of the embed player.
     */
    color?: string;
    logos?: EditVideoRequestBodyEmbedLogos;
    /**
     * Show or hide the playbar.
     */
    playbar?: boolean;
    title?: EditVideoRequestBodyEmbedTitle;
    /**
     * Show or hide the volume selector.
     */
    volume?: boolean;
}
/**
 * The Creative Commons license.
 */
export declare enum EditVideoRequestBodyLicenseEnum {
    By = "by",
    ByNc = "by-nc",
    ByNcNd = "by-nc-nd",
    ByNcSa = "by-nc-sa",
    ByNd = "by-nd",
    BySa = "by-sa",
    Cc0 = "cc0"
}
/**
 * The privacy level required to comment on the video.
 */
export declare enum EditVideoRequestBodyPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
/**
 * The video's new embed settings. The `whitelist` value enables you to define all valid embed domains. See our [documentation](https://developer.vimeo.com/api/endpoints/videos#/{video_id}/privacy/domains) for details on adding and removing domains.
 */
export declare enum EditVideoRequestBodyPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
/**
 * The video's new privacy setting. When privacy is `users`, `application/json` is the only valid content type. Basic users can't set privacy to `unlisted`.
 */
export declare enum EditVideoRequestBodyPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class EditVideoRequestBodyPrivacy extends SpeakeasyBase {
    /**
     * Whether a user can add the video to an album, channel, or group.
     */
    add?: boolean;
    /**
     * The privacy level required to comment on the video.
     */
    comments?: EditVideoRequestBodyPrivacyCommentsEnum;
    /**
     * Whether a user can download the video. Not available to users with a Basic membership.
     */
    download?: boolean;
    /**
     * The video's new embed settings. The `whitelist` value enables you to define all valid embed domains. See our [documentation](https://developer.vimeo.com/api/endpoints/videos#/{video_id}/privacy/domains) for details on adding and removing domains.
     */
    embed?: EditVideoRequestBodyPrivacyEmbedEnum;
    /**
     * The video's new privacy setting. When privacy is `users`, `application/json` is the only valid content type. Basic users can't set privacy to `unlisted`.
     */
    view?: EditVideoRequestBodyPrivacyViewEnum;
}
/**
 * The reason for the video's MPAA rating.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `at` - Adult themes
 *  * `bn` - Brief nudity
 *  * `n` - Nudity
 *  * `sl` - Strong language
 *  * `ss` - Sexual situations
 *  * `v` - Violence
 *
 */
export declare enum EditVideoRequestBodyRatingsMpaaReasonEnum {
    At = "at",
    Bn = "bn",
    N = "n",
    Sl = "sl",
    Ss = "ss",
    V = "v"
}
export declare class EditVideoRequestBodyRatingsMpaa extends SpeakeasyBase {
    /**
     * The reason for the video's MPAA rating.
     *
     * @remarks
     *
     * Option descriptions:
     *  * `at` - Adult themes
     *  * `bn` - Brief nudity
     *  * `n` - Nudity
     *  * `sl` - Strong language
     *  * `ss` - Sexual situations
     *  * `v` - Violence
     *
     */
    reason?: EditVideoRequestBodyRatingsMpaaReasonEnum;
}
/**
 * The reason for the video's TV rating.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `d` - Suggestive dialogue
 *  * `fv` - Fantasy violence
 *  * `l` - Language
 *  * `ss` - Sexual situations
 *  * `v` - Violence
 *
 */
export declare enum EditVideoRequestBodyRatingsTvReasonEnum {
    D = "d",
    Fv = "fv",
    L = "l",
    Ss = "ss",
    V = "v"
}
export declare class EditVideoRequestBodyRatingsTv extends SpeakeasyBase {
    /**
     * The reason for the video's TV rating.
     *
     * @remarks
     *
     * Option descriptions:
     *  * `d` - Suggestive dialogue
     *  * `fv` - Fantasy violence
     *  * `l` - Language
     *  * `ss` - Sexual situations
     *  * `v` - Violence
     *
     */
    reason?: EditVideoRequestBodyRatingsTvReasonEnum;
}
export declare class EditVideoRequestBodyRatings extends SpeakeasyBase {
    mpaa?: EditVideoRequestBodyRatingsMpaa;
    tv?: EditVideoRequestBodyRatingsTv;
}
export declare class EditVideoRequestBodyReviewPage extends SpeakeasyBase {
    /**
     * Enable or disable video review.
     */
    active?: boolean;
}
export declare class EditVideoRequestBodySpatialDirectorTimeline extends SpeakeasyBase {
    /**
     * The timeline pitch. This value must be between -90 and 90.
     */
    pitch: number;
    /**
     * The timeline roll.
     */
    roll?: number;
    /**
     * The 360 director timeline time code.
     */
    timeCode: number;
    /**
     * The timeline yaw. This value must be between 0 and 360.
     */
    yaw: number;
}
/**
 * The 360 spatial projection.
 */
export declare enum EditVideoRequestBodySpatialProjectionEnum {
    Cubical = "cubical",
    Cylindrical = "cylindrical",
    Dome = "dome",
    Equirectangular = "equirectangular",
    Pyramid = "pyramid"
}
/**
 * The 360 spatial stereo format.
 */
export declare enum EditVideoRequestBodySpatialStereoFormatEnum {
    LeftRight = "left-right",
    Mono = "mono",
    TopBottom = "top-bottom"
}
export declare class EditVideoRequestBodySpatial extends SpeakeasyBase {
    /**
     * The 360 director timeline.
     */
    directorTimeline?: EditVideoRequestBodySpatialDirectorTimeline[];
    /**
     * The 360 field of view: default 50, minimum 30, maximum 90.
     */
    fieldOfView?: number;
    /**
     * The 360 spatial projection.
     */
    projection?: EditVideoRequestBodySpatialProjectionEnum;
    /**
     * The 360 spatial stereo format.
     */
    stereoFormat?: EditVideoRequestBodySpatialStereoFormatEnum;
}
export declare class EditVideoRequestBody extends SpeakeasyBase {
    /**
     * A list of values describing the content in this video. You can find the full list in the [`/contentratings`](https://developer.vimeo.com/api/endpoints/videos#GET/contentratings) endpoint.
     */
    contentRating?: string[];
    /**
     * The new description of the video.
     */
    description?: string;
    embed?: EditVideoRequestBodyEmbed;
    /**
     * The Creative Commons license.
     */
    license?: EditVideoRequestBodyLicenseEnum;
    /**
     * The video's default language. For a full list of valid languages, use the [/languages?filter=texttracks](https://developer.vimeo.com/api/endpoints/videos#GET/languages) endpoint.
     */
    locale?: string;
    /**
     * The new title for the video.
     */
    name?: string;
    /**
     * The password. When you set `privacy.view` to `password`, you must provide the password as an additional parameter.
     */
    password?: string;
    privacy?: EditVideoRequestBodyPrivacy;
    ratings?: EditVideoRequestBodyRatings;
    reviewPage?: EditVideoRequestBodyReviewPage;
    spatial?: EditVideoRequestBodySpatial;
}
export declare class EditVideoRequest extends SpeakeasyBase {
    requestBody: EditVideoRequestBody;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class EditVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A parameter is invalid.
     */
    legacyError?: shared.LegacyError;
    /**
     * The video was edited.
     */
    video?: shared.Video;
}
