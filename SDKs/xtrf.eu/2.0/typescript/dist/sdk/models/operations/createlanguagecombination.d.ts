import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateLanguageCombinationRequest extends SpeakeasyBase {
    /**
     * Created language combination for a given project without creating a task.
     */
    commonLanguageCombinationDTO: shared.CommonLanguageCombinationDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class CreateLanguageCombinationResponse extends SpeakeasyBase {
    /**
     * Success
     */
    commonLanguageCombinationDTO?: shared.CommonLanguageCombinationDTO;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
