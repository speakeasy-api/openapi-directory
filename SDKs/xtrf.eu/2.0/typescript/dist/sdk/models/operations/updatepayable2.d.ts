import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatePayable2Request extends SpeakeasyBase {
    payableDTO: shared.PayableDTO;
    /**
     * payable's internal identifier
     */
    payableId: number;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UpdatePayable2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    payableDTO?: shared.PayableDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
