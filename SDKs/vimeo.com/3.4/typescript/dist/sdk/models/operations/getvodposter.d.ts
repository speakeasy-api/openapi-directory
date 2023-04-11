import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVodPosterRequest extends SpeakeasyBase {
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
    /**
     * The ID of the picture.
     */
    posterId: number;
}
export declare class GetVodPosterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The poster was returned.
     */
    picture?: shared.Picture;
}
