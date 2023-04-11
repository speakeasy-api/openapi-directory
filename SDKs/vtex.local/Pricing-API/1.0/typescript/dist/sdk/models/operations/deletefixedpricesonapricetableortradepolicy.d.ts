import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletefixedpricesonapricetableortradepolicyRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
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
     * Price Table or Trade Policy Name.
     */
    priceTableId: string;
}
export declare class DeletefixedpricesonapricetableortradepolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
