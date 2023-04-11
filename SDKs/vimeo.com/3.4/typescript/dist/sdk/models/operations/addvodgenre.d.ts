import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVodGenreSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddVodGenreRequest extends SpeakeasyBase {
    /**
     * The ID of the genre.
     */
    genreId: string;
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
}
export declare class AddVodGenreResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * You can't add more than two genres to an On Demand page.
     */
    legacyError?: shared.LegacyError;
    /**
     * The genre was added.
     */
    onDemandGenre?: shared.OnDemandGenre;
}
