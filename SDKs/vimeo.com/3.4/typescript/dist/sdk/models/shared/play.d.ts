import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the video file:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `source` - The video is a source file.
 *  * `video/mp4` - The video is in MP4 format.
 *  * `video/webm` - The video is in WebM format.
 *  * `vp6/x-video` - The video is in VP6 format.
 *
 */
export declare enum PlayProgressiveTypeEnum {
    Source = "source",
    VideoMp4 = "video/mp4",
    VideoWebm = "video/webm",
    Vp6XVideo = "vp6/x-video"
}
export declare class PlayProgressive extends SpeakeasyBase {
    /**
     * The time in ISO 8601 format when this video file was created.
     */
    createdTime: string;
    /**
     * The FPS of the video file.
     */
    fps: number;
    /**
     * The height in pixels of the video.
     */
    height: number;
    /**
     * The direct link to this video file.
     */
    link: string;
    /**
     * The time in ISO 8601 format when the link to this video file expires.
     */
    linkExpirationTime: string;
    /**
     * The URLs for logging events.
     */
    log?: Record<string, any>;
    /**
     * The MD5 hash of the video file.
     */
    md5: string;
    /**
     * The file size in bytes of this video.
     */
    size: number;
    /**
     * The type of the video file:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `source` - The video is a source file.
     *  * `video/mp4` - The video is in MP4 format.
     *  * `video/webm` - The video is in WebM format.
     *  * `vp6/x-video` - The video is in VP6 format.
     *
     */
    type: PlayProgressiveTypeEnum;
    /**
     * The width in pixels of the video.
     */
    width: number;
}
/**
 * The play status of the video:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `playable` - The video is playable.
 *  * `purchase_required` - The video must be purchased.
 *  * `restricted` - Playback for the video is restricted.
 *  * `unavailable` - The video is unavailable.
 *
 */
export declare enum PlayStatusEnum {
    Playable = "playable",
    PurchaseRequired = "purchase_required",
    Restricted = "restricted",
    Unavailable = "unavailable"
}
export declare class Play extends SpeakeasyBase {
    /**
     * Progressive files.
     */
    progressive?: PlayProgressive[];
    /**
     * The play status of the video:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `playable` - The video is playable.
     *  * `purchase_required` - The video must be purchased.
     *  * `restricted` - Playback for the video is restricted.
     *  * `unavailable` - The video is unavailable.
     *
     */
    status: PlayStatusEnum;
}
