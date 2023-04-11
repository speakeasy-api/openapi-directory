import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllIds4Request extends SpeakeasyBase {
    /**
     * only persons modified since this timestamp
     */
    updatedSince?: number;
}
export declare class GetAllIds4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getAllIds4DefaultApplicationVndXtrfV1PlusJsonInt32Integers?: number[];
}
