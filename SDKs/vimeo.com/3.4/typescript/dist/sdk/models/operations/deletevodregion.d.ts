import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteVodRegionSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteVodRegionRequest extends SpeakeasyBase {
    /**
     * The country code.
     */
    country: string;
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
}
export declare class DeleteVodRegionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * You can't modify an On Demand page that you don't own.
     */
    legacyError?: shared.LegacyError;
}
