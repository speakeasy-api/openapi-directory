import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContact2Request extends SpeakeasyBase {
    /**
     * person's internal identifier
     */
    personId: number;
}
export declare class GetContact2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    personContactDTO?: shared.PersonContactDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
