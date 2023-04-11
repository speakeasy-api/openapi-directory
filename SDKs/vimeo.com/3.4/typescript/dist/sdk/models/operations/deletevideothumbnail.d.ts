import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteVideoThumbnailSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteVideoThumbnailRequest extends SpeakeasyBase {
    /**
     * The ID of the picture.
     */
    pictureId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class DeleteVideoThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
