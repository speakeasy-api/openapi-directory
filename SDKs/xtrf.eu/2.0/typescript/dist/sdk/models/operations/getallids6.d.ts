import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllIds6Request extends SpeakeasyBase {
    /**
     * only projects modified since this timestamp
     */
    updatedSince?: number;
}
export declare class GetAllIds6Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getAllIds6DefaultApplicationVndXtrfV1PlusJsonInt32Integers?: number[];
}
