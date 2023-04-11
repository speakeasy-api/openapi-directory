import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddFileLinks1Request extends SpeakeasyBase {
    /**
     * Added file links to the project as added by PM.
     */
    fileLinkCategorizationsDto: shared.FileLinkCategorizationsDto;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class AddFileLinks1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    filesDto?: shared.FilesDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
