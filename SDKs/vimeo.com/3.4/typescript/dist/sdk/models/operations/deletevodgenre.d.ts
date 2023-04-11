import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteVodGenreSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteVodGenreRequest extends SpeakeasyBase {
    /**
     * The ID of the genre.
     */
    genreId: string;
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
}
export declare class DeleteVodGenreResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The On Demand page must belong to at least one genre.
     */
    legacyError?: shared.LegacyError;
}
