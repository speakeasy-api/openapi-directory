import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddExternalFileLinksRequest extends SpeakeasyBase {
    /**
     * Added file links to the project as added by PM.
     */
    externalFileDto: shared.ExternalFileDto;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class AddExternalFileLinksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
