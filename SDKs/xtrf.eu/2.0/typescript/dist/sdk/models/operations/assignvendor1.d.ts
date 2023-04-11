import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AssignVendor1Request extends SpeakeasyBase {
    /**
     * Assigned vendor to a job in a project.
     */
    vendorPriceProfileDTO: shared.VendorPriceProfileDTO;
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class AssignVendor1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
