import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SuggestVideoCategorySecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SuggestVideoCategoryRequestBody extends SpeakeasyBase {
    /**
     * The array of the names of the categories that you're suggesting.
     */
    category: string[];
}
export declare class SuggestVideoCategoryRequest extends SpeakeasyBase {
    requestBody: SuggestVideoCategoryRequestBody;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class SuggestVideoCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The categories were suggested.
     */
    category?: shared.Category;
    /**
     * You don't own this video.
     */
    legacyError?: shared.LegacyError;
}
