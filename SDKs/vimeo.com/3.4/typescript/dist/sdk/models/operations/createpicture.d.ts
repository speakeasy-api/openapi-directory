import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePictureSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreatePictureRequest extends SpeakeasyBase {
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class CreatePictureResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The user picture was created.
     */
    picture?: shared.Picture;
}
