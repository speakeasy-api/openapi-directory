import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Update1Request extends SpeakeasyBase {
    /**
     * Updated existing person.
     */
    customerPersonDTO: shared.CustomerPersonDTO;
    /**
     * person's internal identifier
     */
    personId: number;
}
export declare class Update1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customerPersonDTO?: shared.CustomerPersonDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
