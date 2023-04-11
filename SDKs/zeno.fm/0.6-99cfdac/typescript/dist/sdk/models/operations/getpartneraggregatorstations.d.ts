import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPartnerAggregatorStationsRequest extends SpeakeasyBase {
    hitsPerPage?: string;
    page?: string;
}
export declare class GetPartnerAggregatorStationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
