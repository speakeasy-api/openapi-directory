import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateUpdateHolidayCreateUpdateHolidayRequest extends SpeakeasyBase {
    name: string;
    startDate: string;
}
export declare class CreateUpdateHolidayRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    requestBody: CreateUpdateHolidayCreateUpdateHolidayRequest;
    holidayId: string;
}
export declare class CreateUpdateHolidayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
