import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFilterRequest extends SpeakeasyBase {
    /**
     * view's identifier
     */
    viewId: number;
}
export declare class GetFilterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    filterDTO?: shared.FilterDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
