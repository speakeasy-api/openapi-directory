import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLicenseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getLicenseResult?: shared.GetLicenseResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
