import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVcenterDatasourceSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class AddVcenterDatasourceResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    vCenterDataSource?: shared.VCenterDataSource;
}
