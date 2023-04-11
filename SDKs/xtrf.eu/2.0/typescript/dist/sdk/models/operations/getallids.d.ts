import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllIdsRequest extends SpeakeasyBase {
    /**
     * only client invoices modified since this timestamp
     */
    updatedSince?: number;
}
export declare class GetAllIdsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * client invoices' internal identifiers
     */
    getAllIdsDefaultApplicationVndXtrfV1PlusJsonInt32Integers?: number[];
}
