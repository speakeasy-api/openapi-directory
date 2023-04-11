import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGenreVodRequest extends SpeakeasyBase {
    /**
     * The ID of the genre.
     */
    genreId: string;
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
}
export declare class GetGenreVodResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such On Demand page or genre exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The On Demand page belongs to the genre.
     */
    onDemandPage?: shared.OnDemandPage;
}
