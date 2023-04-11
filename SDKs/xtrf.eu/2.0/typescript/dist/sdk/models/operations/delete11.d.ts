import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Delete11Request extends SpeakeasyBase {
    /**
     * report's internal identifier
     */
    reportId: number;
}
export declare class Delete11Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
