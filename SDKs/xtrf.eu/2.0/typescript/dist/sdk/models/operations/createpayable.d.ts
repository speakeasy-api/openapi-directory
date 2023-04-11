import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePayableRequest extends SpeakeasyBase {
    payableCreateDTO: shared.PayableCreateDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class CreatePayableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    payableDTO?: shared.PayableDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
