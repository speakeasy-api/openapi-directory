import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddFileLinksRequest extends SpeakeasyBase {
    /**
     * Adds file link to the project as a link delivered in the job.
     */
    fileLinkCategorizationsDto: shared.FileLinkCategorizationsDto;
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class AddFileLinksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    filesDto?: shared.FilesDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
