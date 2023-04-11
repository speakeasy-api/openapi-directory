import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllIds5Request extends SpeakeasyBase {
    /**
     * only providers modified since this timestamp
     */
    updatedSince?: number;
}
export declare class GetAllIds5Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getAllIds5DefaultApplicationVndXtrfV1PlusJsonInt32Integers?: number[];
}
