import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateVendorInstructionsRequest extends SpeakeasyBase {
    /**
     * Updated instructions for all vendors performing the jobs in a project.
     */
    stringDTO: shared.StringDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UpdateVendorInstructionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
