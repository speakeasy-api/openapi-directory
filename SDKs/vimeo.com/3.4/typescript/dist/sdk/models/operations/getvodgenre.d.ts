import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVodGenreRequest extends SpeakeasyBase {
    /**
     * The ID of the genre.
     */
    genreId: string;
}
export declare class GetVodGenreResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such On Demand genre exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The On Demand genre was returned.
     */
    onDemandGenre?: shared.OnDemandGenre;
}
