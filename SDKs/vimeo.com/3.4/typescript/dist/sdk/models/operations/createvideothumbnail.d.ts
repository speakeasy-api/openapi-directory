import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateVideoThumbnailSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateVideoThumbnailRequestBody extends SpeakeasyBase {
    /**
     * Whether the image created by the `time` field should be the default thumbnail for the video.
     */
    active?: boolean;
    /**
     * Creates an image of the video from the given time offset.
     */
    time?: number;
}
export declare class CreateVideoThumbnailRequest extends SpeakeasyBase {
    requestBody?: CreateVideoThumbnailRequestBody;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class CreateVideoThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The thumbnail was created.
     */
    picture?: shared.Picture;
}
