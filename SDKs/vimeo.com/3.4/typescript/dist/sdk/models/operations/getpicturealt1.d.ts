import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPictureAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the picture.
     */
    portraitsetId: number;
}
export declare class GetPictureAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The picture was returned.
     */
    picture?: shared.Picture;
}
