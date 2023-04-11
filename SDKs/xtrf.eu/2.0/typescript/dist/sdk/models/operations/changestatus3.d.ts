import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangeStatus3Request extends SpeakeasyBase {
    /**
     * Changed Quote status.
     */
    projectStatusDTO: shared.ProjectStatusDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class ChangeStatus3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
