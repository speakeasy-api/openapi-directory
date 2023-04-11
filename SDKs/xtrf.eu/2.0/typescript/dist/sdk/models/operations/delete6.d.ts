import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Delete6Request extends SpeakeasyBase {
    /**
     * provider invoice's internal identifier
     */
    invoiceId: number;
}
export declare class Delete6Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
