import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListExposedActionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    exposedActionResponseSchema?: shared.ExposedActionResponseSchema;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
