import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateFilterRequest extends SpeakeasyBase {
    /**
     * Updated view's filter.
     */
    requestBody: shared.FilterPropertyDTO[];
    /**
     * view's identifier
     */
    viewId: number;
}
export declare class UpdateFilterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    filterDTO?: shared.FilterDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
