import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateLanguageCombination1Request extends SpeakeasyBase {
    /**
     * Created a new language combination for a given quote without creating a task.
     */
    commonLanguageCombinationDTO: shared.CommonLanguageCombinationDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class CreateLanguageCombination1Response extends SpeakeasyBase {
    /**
     * Success
     */
    commonLanguageCombinationDTO?: shared.CommonLanguageCombinationDTO;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
