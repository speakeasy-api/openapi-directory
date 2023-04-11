import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RunRequest extends SpeakeasyBase {
    /**
     * Generated client invoices documents.
     */
    macroRequestDTO: shared.MacroRequestDTO;
    /**
     * macro internal identifier
     */
    macroId: number;
}
export declare class RunResponse extends SpeakeasyBase {
    /**
     * Success
     */
    actionStartedDTO?: shared.ActionStartedDTO;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
