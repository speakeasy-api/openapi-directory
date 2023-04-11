import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateExchangeRateRequest extends SpeakeasyBase {
    /**
     * Adding new currency exchange rates
     */
    currencyHistoryDTO: shared.CurrencyHistoryDTO;
    /**
     * iso code, https://www.xe.com/iso4217.php
     */
    isoCode: string;
}
export declare class CreateExchangeRateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
