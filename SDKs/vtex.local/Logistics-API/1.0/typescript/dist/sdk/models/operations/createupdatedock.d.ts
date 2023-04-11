import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateUpdateDockCreateUpdateDockRequestAddress1Country extends SpeakeasyBase {
    acronym: string;
    name: string;
}
export declare class CreateUpdateDockCreateUpdateDockRequestAddress1 extends SpeakeasyBase {
    city: string;
    complement: string;
    coordinates: number[][];
    country: CreateUpdateDockCreateUpdateDockRequestAddress1Country;
    neighborhood: string;
    number: string;
    postalCode: string;
    state: string;
    street: string;
}
export declare class CreateUpdateDockCreateUpdateDockRequest extends SpeakeasyBase {
    address: CreateUpdateDockCreateUpdateDockRequestAddress1;
    dockTimeFake: string;
    freightTableIds: string[];
    id: string;
    name: string;
    priority: number;
    salesChannel: string;
    salesChannels: string[];
    timeFakeOverhead: string;
    wmsEndPoint: string;
}
export declare class CreateUpdateDockRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    requestBody: CreateUpdateDockCreateUpdateDockRequest;
}
export declare class CreateUpdateDockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
