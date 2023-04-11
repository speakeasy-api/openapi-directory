import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Delete10Request extends SpeakeasyBase {
    /**
     * provider's internal identifier
     */
    providerId: number;
}
export declare class Delete10Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
