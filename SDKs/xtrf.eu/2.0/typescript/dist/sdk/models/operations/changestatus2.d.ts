import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangeStatus2Request extends SpeakeasyBase {
    /**
     * Changed project status.
     */
    projectStatusDTO: shared.ProjectStatusDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class ChangeStatus2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
