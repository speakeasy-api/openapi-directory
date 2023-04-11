import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateVideoThumbnailAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateVideoThumbnailAlt1RequestBody extends SpeakeasyBase {
    /**
     * Whether the image created by the `time` field should be the default thumbnail for the video.
     */
    active?: boolean;
    /**
     * Creates an image of the video from the given time offset.
     */
    time?: number;
}
export declare class CreateVideoThumbnailAlt1Request extends SpeakeasyBase {
    requestBody?: CreateVideoThumbnailAlt1RequestBody;
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class CreateVideoThumbnailAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The thumbnail was created.
     */
    picture?: shared.Picture;
}
