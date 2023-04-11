import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllIds7Request extends SpeakeasyBase {
    /**
     * only quotes modified since this timestamp
     */
    updatedSince?: number;
}
export declare class GetAllIds7Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getAllIds7DefaultApplicationVndXtrfV1PlusJsonInt32Integers?: number[];
}
