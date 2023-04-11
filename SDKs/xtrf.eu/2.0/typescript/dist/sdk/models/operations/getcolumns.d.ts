import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetColumnsRequest extends SpeakeasyBase {
    /**
     * view's identifier
     */
    viewId: number;
}
export declare class GetColumnsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    columnDTOS?: shared.ColumnDTO[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
