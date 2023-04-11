import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVideoPrivacyDomainsRequest extends SpeakeasyBase {
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The number of items to show on each page of results, up to a maximum of 100.
     */
    perPage?: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class GetVideoPrivacyDomainsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The domains were returned.
     */
    domains?: shared.Domain[];
    /**
     * There are no domains on which the video can be embedded.
     */
    legacyError?: shared.LegacyError;
}
