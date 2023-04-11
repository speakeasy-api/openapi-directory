import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SaveSupplyLotSaveSupplyLot extends SpeakeasyBase {
    dateOfSupplyUtc: string;
    keepSellingAfterExpiration: boolean;
    quantity: number;
}
export declare class SaveSupplyLotRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    requestBody: SaveSupplyLotSaveSupplyLot;
    /**
     * ID of the SKU whose availability is being scheduled.
     */
    skuId: string;
    /**
     * ID of the Supply Lot in which the SKU's scheduling should be considered.
     */
    supplyLotId: string;
    /**
     * ID of the warehouse where the SKU will arrive.
     */
    warehouseId: string;
}
export declare class SaveSupplyLotResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
