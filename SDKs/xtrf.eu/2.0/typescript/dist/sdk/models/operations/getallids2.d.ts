import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllIds2Request extends SpeakeasyBase {
    /**
     * exact email of client
     */
    emailEquals?: string;
    /**
     * exact name of client
     */
    nameEquals?: string;
    /**
     * only clients modified since this timestamp
     */
    updatedSince?: number;
}
export declare class GetAllIds2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getAllIds2DefaultApplicationJSONInt32Integers?: number[];
}
