import { SpeakeasyBase } from "../../../internal/utils";
export declare class Image extends SpeakeasyBase {
    /**
     * Name of the SKU image.
     */
    imageName: string;
    /**
     * URL of the SKU image. The image must be sent through `https` protocol, otherwise it will not be rendered in VTEX Admin.
     */
    imageUrl: string;
}
