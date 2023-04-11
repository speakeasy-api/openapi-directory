import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFileById1Request extends SpeakeasyBase {
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class GetFileById1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    projectFileDto?: shared.ProjectFileDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
