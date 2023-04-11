import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatenewappkeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createnewappkeyResponse?: shared.CreatenewappkeyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
