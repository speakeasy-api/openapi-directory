import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllIds3Request extends SpeakeasyBase {
    /**
     * only vendor invoices modified since this timestamp
     */
    updatedSince?: number;
}
export declare class GetAllIds3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * vendor invoices' internal identifiers
     */
    getAllIds3DefaultApplicationVndXtrfV1PlusJsonInt32Integers?: number[];
}
