import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Create7Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    quoteDTOv2?: shared.QuoteDTOv2;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
