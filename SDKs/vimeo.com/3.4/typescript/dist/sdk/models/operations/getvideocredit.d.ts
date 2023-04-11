import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVideoCreditRequest extends SpeakeasyBase {
    /**
     * The ID of the credit.
     */
    creditId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class GetVideoCreditResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The credit was returned.
     */
    credit?: shared.Credit;
    /**
     * No such video or credit exists.
     */
    legacyError?: shared.LegacyError;
}
