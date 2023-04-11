import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVideoTagsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddVideoTagsRequestBody extends SpeakeasyBase {
    /**
     * The name of the tag to apply. See our documentation on [batch requests](https://developer.vimeo.com/api/common-formats#batch-requests) for more information.
     */
    name: string;
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The number of items to show on each page of results, up to a maximum of 100.
     */
    perPage?: number;
}
export declare class AddVideoTagsRequest extends SpeakeasyBase {
    requestBody: AddVideoTagsRequestBody;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class AddVideoTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * The request body wasn't supplied.
     *
     * @remarks
     * * A parameter is invalid.
     * * The request body isn't a JSON-encoded list of tags.
     */
    legacyError?: shared.LegacyError;
    /**
     * The tags that were added.
     */
    tags?: shared.Tag[];
}
