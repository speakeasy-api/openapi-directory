import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddExternalFileLinkRequest extends SpeakeasyBase {
    /**
     * Added file links to the project as added by PM.
     */
    externalFileDto: shared.ExternalFileDto;
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class AddExternalFileLinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
