import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ShareAsReferenceFilesRequest extends SpeakeasyBase {
    /**
     * Shared selected files as Reference Files with a job in a project.
     */
    filesDto: shared.FilesDto;
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class ShareAsReferenceFilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    filesShareStatusDto?: shared.FilesShareStatusDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
