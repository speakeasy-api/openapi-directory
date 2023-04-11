import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVodRegionRequest extends SpeakeasyBase {
    /**
     * The country code.
     */
    country: string;
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
}
export declare class GetVodRegionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such On Demand page or region exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The On Demand page's region was returned.
     */
    onDemandRegion?: shared.OnDemandRegion;
}
