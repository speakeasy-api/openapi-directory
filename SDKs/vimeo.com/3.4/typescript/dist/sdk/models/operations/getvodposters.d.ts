import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVodPostersRequest extends SpeakeasyBase {
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The number of items to show on each page of results, up to a maximum of 100.
     */
    perPage?: number;
}
export declare class GetVodPostersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such On Demand page exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The posters were returned.
     */
    pictures?: shared.Picture[];
}
