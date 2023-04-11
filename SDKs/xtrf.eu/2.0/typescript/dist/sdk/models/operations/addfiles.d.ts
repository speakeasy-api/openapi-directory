import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddFilesRequest extends SpeakeasyBase {
    /**
     * Added files to the project as delivered in the job.
     */
    fileCategorizationsDto: shared.FileCategorizationsDto;
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class AddFilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
