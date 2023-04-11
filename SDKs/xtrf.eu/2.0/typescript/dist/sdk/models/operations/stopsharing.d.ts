import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StopSharingRequest extends SpeakeasyBase {
    /**
     * File sharing stopped for a project task.
     */
    filesDto: shared.FilesDto;
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class StopSharingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    filesShareStatusDto?: shared.FilesShareStatusDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
