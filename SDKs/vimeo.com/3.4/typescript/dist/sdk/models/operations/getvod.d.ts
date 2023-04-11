import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVodRequest extends SpeakeasyBase {
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
}
export declare class GetVodResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such On Demand page exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The On Demand page was returned.
     */
    onDemandPage?: shared.OnDemandPage;
}
