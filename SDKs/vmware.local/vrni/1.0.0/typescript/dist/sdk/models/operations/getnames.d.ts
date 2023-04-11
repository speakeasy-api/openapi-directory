import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNamesSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetNamesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    namesResponse?: shared.NamesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
