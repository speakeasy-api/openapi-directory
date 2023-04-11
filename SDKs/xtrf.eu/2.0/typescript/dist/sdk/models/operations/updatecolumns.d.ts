import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateColumnsRequest extends SpeakeasyBase {
    /**
     * Updated columns in view.
     */
    requestBody: shared.ColumnDTO[];
    /**
     * view's identifier
     */
    viewId: number;
}
export declare class UpdateColumnsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    columnDTOS?: shared.ColumnDTO[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
