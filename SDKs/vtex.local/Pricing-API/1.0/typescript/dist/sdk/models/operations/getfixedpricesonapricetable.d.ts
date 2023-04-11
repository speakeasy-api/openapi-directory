import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFixedPricesonapricetableRequest extends SpeakeasyBase {
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * SKU ID.
     */
    itemId: number;
    /**
     * Price Table Name
     */
    priceTableId: string;
}
export declare class GetFixedPricesonapricetableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    fixedPrices?: shared.FixedPrice[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
