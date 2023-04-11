import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateContacts2Request extends SpeakeasyBase {
    /**
     * Updated Client Contacts for a project.
     */
    smartContactsDTO: shared.SmartContactsDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UpdateContacts2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    smartContactsDTO?: shared.SmartContactsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
