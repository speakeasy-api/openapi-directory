import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContacts2Request extends SpeakeasyBase {
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class GetContacts2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    smartContactsDTO?: shared.SmartContactsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
