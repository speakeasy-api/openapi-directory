import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePictureAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeletePictureAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the picture.
     */
    portraitsetId: number;
}
export declare class DeletePictureAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
