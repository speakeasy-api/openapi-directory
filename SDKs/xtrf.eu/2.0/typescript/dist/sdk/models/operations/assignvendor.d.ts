import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AssignVendorRequest extends SpeakeasyBase {
    /**
     * Assigned vendor to a job in a project.
     */
    assignVendorDTO: shared.AssignVendorDTO;
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class AssignVendorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
