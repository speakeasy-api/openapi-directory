import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditPictureSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class EditPictureRequestBody extends SpeakeasyBase {
    /**
     * Whether the picture is the user's active portrait.
     */
    active?: boolean;
}
export declare class EditPictureRequest extends SpeakeasyBase {
    requestBody?: EditPictureRequestBody;
    /**
     * The ID of the picture.
     */
    portraitsetId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class EditPictureResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The picture was edited.
     */
    picture?: shared.Picture;
}
