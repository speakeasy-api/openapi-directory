import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVodSeasonRequest extends SpeakeasyBase {
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
    /**
     * The ID of the season.
     */
    seasonId: number;
}
export declare class GetVodSeasonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such On Demand page or season exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The season was returned.
     */
    onDemandSeason?: shared.OnDemandSeason;
}
