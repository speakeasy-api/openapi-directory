import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateContacts1Request extends SpeakeasyBase {
    /**
     * Updated contacts of given task.
     */
    contactsDTO: shared.ContactsDTO;
    /**
     * task's internal identifier
     */
    taskId: string;
}
export declare class UpdateContacts1Response extends SpeakeasyBase {
    /**
     * Success
     */
    contactsDTO?: shared.ContactsDTO;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
