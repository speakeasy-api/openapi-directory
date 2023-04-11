import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Duplicate1Request extends SpeakeasyBase {
    /**
     * report's internal identifier
     */
    reportId: number;
}
export declare class Duplicate1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
