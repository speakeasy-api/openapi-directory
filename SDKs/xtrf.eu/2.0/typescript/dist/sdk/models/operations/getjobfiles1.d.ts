import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetJobFiles1Request extends SpeakeasyBase {
    /**
     * file's internal identifier
     */
    fileId: number;
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class GetJobFiles1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    fileMetadataDTO?: shared.FileMetadataDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
