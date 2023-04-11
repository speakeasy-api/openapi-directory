import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateClientReferenceNumberRequest extends SpeakeasyBase {
    /**
     * Updated Client Reference Number for a project.
     */
    stringDTO: shared.StringDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UpdateClientReferenceNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
