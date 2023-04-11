import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditVodPosterSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class EditVodPosterRequestBody extends SpeakeasyBase {
    /**
     * Whether to make this picture the active picture.
     */
    active?: boolean;
}
export declare class EditVodPosterRequest extends SpeakeasyBase {
    requestBody?: EditVodPosterRequestBody;
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
    /**
     * The ID of the picture.
     */
    posterId: number;
}
export declare class EditVodPosterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The poster was edited.
     */
    picture?: shared.Picture;
}
