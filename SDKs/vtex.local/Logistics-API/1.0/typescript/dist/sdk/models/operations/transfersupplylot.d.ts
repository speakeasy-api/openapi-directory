import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TransferSupplyLotRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    /**
     * ID of the SKU.
     */
    skuId: string;
    /**
     * ID of the Supply Lot in which the SKU is currently located and from where it will be transfered.
     */
    supplyLotId: string;
    /**
     * ID of the warehouse where the SKU is located.
     */
    warehouseId: string;
}
export declare class TransferSupplyLotResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
