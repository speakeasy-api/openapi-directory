import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVodGenresByOndemandIdRequest extends SpeakeasyBase {
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
}
export declare class GetVodGenresByOndemandIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such On Demand page exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The genres were returned.
     */
    onDemandGenres?: shared.OnDemandGenre[];
}
