import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetByIdRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    pickupPointId: string;
}
export declare class GetByIdGetByIdAddress4Country extends SpeakeasyBase {
    acronym: string;
    name: string;
}
export declare class GetByIdGetByIdAddress4Location5 extends SpeakeasyBase {
    latitude: number;
    longitude: number;
}
export declare class GetByIdGetByIdAddress4 extends SpeakeasyBase {
    city: string;
    complement: string;
    country: GetByIdGetByIdAddress4Country;
    location: GetByIdGetByIdAddress4Location5;
    neighborhood: string;
    number: string;
    postalCode: string;
    state: string;
    street: string;
}
export declare class GetByIdGetByIdBusinessHour extends SpeakeasyBase {
    closingTime: string;
    dayOfWeek: number;
    openingTime: string;
}
export declare class GetByIdGetById extends SpeakeasyBase {
    address: GetByIdGetByIdAddress4;
    businessHours: GetByIdGetByIdBusinessHour[];
    description: string;
    formattedAddress: string;
    id: string;
    instructions: string;
    isActive: boolean;
    name: string;
    warehouseId: string;
}
export declare class GetByIdResponse extends SpeakeasyBase {
    contentType: string;
    getById?: GetByIdGetById;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
