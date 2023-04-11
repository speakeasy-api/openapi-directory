import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePayable2Request extends SpeakeasyBase {
    payableCreateDTO: shared.PayableCreateDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class CreatePayable2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    payableDTO?: shared.PayableDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
