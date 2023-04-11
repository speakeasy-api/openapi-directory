import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateInventoryBySkuandWarehouseUpdateInventoryBySkuandWarehouseRequest extends SpeakeasyBase {
    /**
     * Defines the corresponding moment to the informed warehouse. It is useful due to the liberation of handling order reservations.
     *
     * @remarks
     *
     * When requested as `null`, this value will be the date/time of the request. Its format is `DateTimeOffset`, as in `yyyy-mm-dd-Thh:mm:ss`. For example: `2022-03-15T00:52:16`.
     */
    dateUtcOnBalanceSystem?: string;
    quantity: number;
    timeToRefillDeprecated: string;
    unlimitedQuantity: boolean;
}
export declare class UpdateInventoryBySkuandWarehouseRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody: UpdateInventoryBySkuandWarehouseUpdateInventoryBySkuandWarehouseRequest;
    skuId: string;
    warehouseId: string;
}
export declare class UpdateInventoryBySkuandWarehouseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
