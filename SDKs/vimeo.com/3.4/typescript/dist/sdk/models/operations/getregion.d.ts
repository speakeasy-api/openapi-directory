import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRegionRequest extends SpeakeasyBase {
    /**
     * The country code.
     */
    country: string;
}
export declare class GetRegionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such On Demand region exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The On Demand region was returned.
     */
    onDemandRegion?: shared.OnDemandRegion;
}
