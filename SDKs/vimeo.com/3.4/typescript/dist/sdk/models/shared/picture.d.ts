import { SpeakeasyBase } from "../../../internal/utils";
export declare class PictureSizes extends SpeakeasyBase {
    /**
     * The height of the image.
     */
    height: number;
    /**
     * The direct link to the image.
     */
    link: string;
    /**
     * The direct link to the image with a play button overlay.
     */
    linkWithPlayButton?: string;
    /**
     * The width of the image.
     */
    width: number;
}
/**
 * The type of the picture:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `caution` - An image that is appropriate for all ages.
 *  * `custom` - A custom image for the video.
 *  * `default` - The default image for the video.
 *
 */
export declare enum PictureTypeEnum {
    Caution = "caution",
    Custom = "custom",
    Default = "default"
}
/**
 * The thumbnail was created.
 */
export declare class Picture extends SpeakeasyBase {
    /**
     * Whether this picture is the active picture for its parent resource.
     */
    active: boolean;
    /**
     * The upload URL for the picture. This field appears when you create the picture resource for the first time.
     */
    link?: string;
    /**
     * The picture's resource key string.
     */
    resourceKey: string;
    /**
     * An array containing reference information about all available image files.
     */
    sizes: PictureSizes[];
    /**
     * The type of the picture:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `caution` - An image that is appropriate for all ages.
     *  * `custom` - A custom image for the video.
     *  * `default` - The default image for the video.
     *
     */
    type: PictureTypeEnum;
    /**
     * The picture's URI.
     */
    uri: string;
}
