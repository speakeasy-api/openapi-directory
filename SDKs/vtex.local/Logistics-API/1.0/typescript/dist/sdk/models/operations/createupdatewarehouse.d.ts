import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateUpdateWarehouseCreateUpdateWarehouseRequestWarehouseDock extends SpeakeasyBase {
    cost: string;
    costToDisplay: string;
    dockId: string;
    name: string;
    time: string;
    translateDays: string;
}
export declare class CreateUpdateWarehouseCreateUpdateWarehouseRequest extends SpeakeasyBase {
    id: string;
    name: string;
    warehouseDocks: CreateUpdateWarehouseCreateUpdateWarehouseRequestWarehouseDock[];
}
export declare class CreateUpdateWarehouseRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    requestBody: CreateUpdateWarehouseCreateUpdateWarehouseRequest;
}
export declare class CreateUpdateWarehouseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
