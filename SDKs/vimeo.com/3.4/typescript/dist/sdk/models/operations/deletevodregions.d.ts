import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteVodRegionsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteVodRegionsRequestBody extends SpeakeasyBase {
    /**
     * An array of country codes.
     */
    countries?: string[];
}
export declare class DeleteVodRegionsRequest extends SpeakeasyBase {
    requestBody?: DeleteVodRegionsRequestBody;
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
}
export declare class DeleteVodRegionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * You can't modify an On Demand page that you don't own.
     */
    legacyError?: shared.LegacyError;
    /**
     * The On Demand regions were deleted.
     */
    onDemandRegions?: shared.OnDemandRegion[];
}
