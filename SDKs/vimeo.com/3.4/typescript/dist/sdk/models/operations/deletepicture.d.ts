import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePictureSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeletePictureRequest extends SpeakeasyBase {
    /**
     * The ID of the picture.
     */
    portraitsetId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class DeletePictureResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
