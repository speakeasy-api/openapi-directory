import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVideoThumbnailRequest extends SpeakeasyBase {
    /**
     * The ID of the picture.
     */
    pictureId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class GetVideoThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The thumbnail was returned.
     */
    picture?: shared.Picture;
}
