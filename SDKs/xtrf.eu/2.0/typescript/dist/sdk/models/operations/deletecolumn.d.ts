import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteColumnRequest extends SpeakeasyBase {
    /**
     * column's name
     */
    columnName: string;
    /**
     * view's identifier
     */
    viewId: number;
}
export declare class DeleteColumnResponse extends SpeakeasyBase {
    /**
     * Success
     */
    columnDTOS?: shared.ColumnDTO[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
