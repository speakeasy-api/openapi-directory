import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPictureRequest extends SpeakeasyBase {
    /**
     * The ID of the picture.
     */
    portraitsetId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetPictureResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The picture was returned.
     */
    picture?: shared.Picture;
}
