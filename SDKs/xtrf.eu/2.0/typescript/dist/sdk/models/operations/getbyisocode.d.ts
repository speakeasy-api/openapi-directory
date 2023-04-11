import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetByIsoCodeRequest extends SpeakeasyBase {
    /**
     * iso code, https://www.xe.com/iso4217.php
     */
    isoCode: string;
}
export declare class GetByIsoCodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    currencyHistoryDTO?: shared.CurrencyHistoryDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
