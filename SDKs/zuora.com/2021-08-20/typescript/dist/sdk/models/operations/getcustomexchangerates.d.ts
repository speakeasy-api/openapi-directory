import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomExchangeRatesPathParams extends SpeakeasyBase {
    currency: string;
}
export declare class GetCustomExchangeRatesQueryParams extends SpeakeasyBase {
    endDate: string;
    startDate: string;
}
export declare class GetCustomExchangeRatesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetCustomExchangeRatesRequest extends SpeakeasyBase {
    pathParams: GetCustomExchangeRatesPathParams;
    queryParams: GetCustomExchangeRatesQueryParams;
    headers: GetCustomExchangeRatesHeaders;
}
export declare class GetCustomExchangeRatesResponse extends SpeakeasyBase {
    contentType: string;
    getCustomExchangeRatesType?: shared.GetCustomExchangeRatesType;
    headers: Record<string, string[]>;
    statusCode: number;
}
