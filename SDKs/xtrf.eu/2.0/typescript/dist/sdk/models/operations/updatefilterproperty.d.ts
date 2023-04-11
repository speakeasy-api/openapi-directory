import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateFilterPropertyRequest extends SpeakeasyBase {
    /**
     * Updated view's filter property.
     */
    filterPropertyDTO: shared.FilterPropertyDTO;
    /**
     * view's filter property name
     */
    filterProperty: string;
    /**
     * view's identifier
     */
    viewId: number;
}
export declare class UpdateFilterPropertyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateFilterPropertyDefaultApplicationVndXtrfV1PlusJsonObject?: Record<string, any>;
}
