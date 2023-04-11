import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditVideoThumbnailSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class EditVideoThumbnailRequestBody extends SpeakeasyBase {
    /**
     * Whether this thumbnail is the default.
     */
    active?: boolean;
}
export declare class EditVideoThumbnailRequest extends SpeakeasyBase {
    requestBody?: EditVideoThumbnailRequestBody;
    /**
     * The ID of the picture.
     */
    pictureId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class EditVideoThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The thumbnail was edited.
     */
    picture?: shared.Picture;
}
