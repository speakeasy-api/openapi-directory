import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVcenterSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetVcenterRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class GetVcenterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    vCenterDataSource?: shared.VCenterDataSource;
}
