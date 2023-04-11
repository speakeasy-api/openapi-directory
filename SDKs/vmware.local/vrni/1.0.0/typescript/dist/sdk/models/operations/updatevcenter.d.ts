import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateVcenterSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class UpdateVcenterRequest extends SpeakeasyBase {
    vCenterDataSource?: shared.VCenterDataSource;
    /**
     * entity id
     */
    id: string;
}
export declare class UpdateVcenterResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    vCenterDataSource?: shared.VCenterDataSource;
}
