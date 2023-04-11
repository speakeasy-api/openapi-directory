import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetById1Request extends SpeakeasyBase {
    /**
     * person's internal identifier
     */
    personId: number;
}
export declare class GetById1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customerPersonDTO?: shared.CustomerPersonDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
