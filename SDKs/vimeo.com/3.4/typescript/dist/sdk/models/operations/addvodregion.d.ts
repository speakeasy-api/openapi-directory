import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVodRegionSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddVodRegionRequest extends SpeakeasyBase {
    /**
     * The country code.
     */
    country: string;
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
}
export declare class AddVodRegionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * You can't modify an On Demand page that you don't own.
     */
    legacyError?: shared.LegacyError;
    /**
     * The region was added.
     */
    onDemandRegion?: shared.OnDemandRegion;
}
