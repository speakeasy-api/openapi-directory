import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateReceivable2Request extends SpeakeasyBase {
    receivableCreateDTO: shared.ReceivableCreateDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class CreateReceivable2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    receivableDTO?: shared.ReceivableDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
