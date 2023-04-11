import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditPictureAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class EditPictureAlt1RequestBody extends SpeakeasyBase {
    /**
     * Whether the picture is the user's active portrait.
     */
    active?: boolean;
}
export declare class EditPictureAlt1Request extends SpeakeasyBase {
    requestBody?: EditPictureAlt1RequestBody;
    /**
     * The ID of the picture.
     */
    portraitsetId: number;
}
export declare class EditPictureAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The picture was edited.
     */
    picture?: shared.Picture;
}
