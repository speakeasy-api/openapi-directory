import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddNsxvManagerDatasourceSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class AddNsxvManagerDatasourceResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * Success
     */
    nsxvManagerDataSource?: shared.NSXVManagerDataSource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
