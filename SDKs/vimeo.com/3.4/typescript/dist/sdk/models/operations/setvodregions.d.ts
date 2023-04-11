import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetVodRegionsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SetVodRegionsRequestBody extends SpeakeasyBase {
    /**
     * An array of country codes.
     */
    countries: string[];
}
export declare class SetVodRegionsRequest extends SpeakeasyBase {
    requestBody: SetVodRegionsRequestBody;
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
}
export declare class SetVodRegionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * You can't modify an On Demand page that you don't own.
     */
    legacyError?: shared.LegacyError;
    /**
     * The list of regions was set.
     */
    onDemandRegion?: shared.OnDemandRegion;
}
