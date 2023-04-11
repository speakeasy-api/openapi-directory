import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadFile1Request extends SpeakeasyBase {
    /**
     * Uploaded file to the project as a file delivered in the job.
     */
    fileToUploadDto: shared.FileToUploadDto;
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class UploadFile1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    fileDto?: shared.FileDto1;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
