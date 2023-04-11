import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Delete3Request extends SpeakeasyBase {
    /**
     * person's internal identifier
     */
    personId: number;
}
export declare class Delete3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
