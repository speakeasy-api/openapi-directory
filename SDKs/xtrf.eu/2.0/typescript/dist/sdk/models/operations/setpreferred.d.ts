import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetPreferredRequest extends SpeakeasyBase {
    /**
     * Marked report as preferred or not.
     */
    preferredRequestDTO: shared.PreferredRequestDTO;
    /**
     * report's internal identifier
     */
    reportId: number;
}
export declare class SetPreferredResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
