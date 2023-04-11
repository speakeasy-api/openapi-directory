import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWatchHistorySecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetWatchHistoryRequest extends SpeakeasyBase {
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The number of items to show on each page of results, up to a maximum of 100.
     */
    perPage?: number;
}
export declare class GetWatchHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The user can't view another user's watch history.
     */
    legacyError?: shared.LegacyError;
    /**
     * The videos were returned.
     */
    videos?: shared.Video[];
}
