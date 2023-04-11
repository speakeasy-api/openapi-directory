import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Request fields
 */
export declare class OptCapProgramInPriceRequestBody extends SpeakeasyBase {
    /**
     * A Boolean parameter that allows all sellers to completely enroll in or out of the Competitive Price Adjustment program
     */
    subsidyEnrolled?: boolean;
    /**
     * A Boolean parameter that determines whether offer level subsidy setting override seller level subsidy setting
     */
    subsidyPreference?: boolean;
}
export declare class OptCapProgramInPriceRequest extends SpeakeasyBase {
    /**
     * Request fields
     */
    requestBody: OptCapProgramInPriceRequestBody;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
     */
    wmConsumerChannelType?: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
     */
    wmQosCorrelationId: string;
    /**
     * The access token retrieved in the Token API call
     */
    wmSecAccessToken: string;
    /**
     * Walmart Service Name
     */
    wmSvcName: string;
}
export declare class OptCapProgramInPrice200ApplicationJSONStatusInfo extends SpeakeasyBase {
    /**
     * A Boolean parameter that allows all sellers to completely enroll in or out of the Competitive Price Adjustment program
     */
    subsidyEnrolled?: boolean;
    /**
     * A Boolean parameter that determines whether offer level subsidy setting override seller level subsidy setting
     */
    subsidyPreference?: boolean;
}
/**
 * Successful Operation
 */
export declare class OptCapProgramInPrice200ApplicationJSON extends SpeakeasyBase {
    /**
     * A unique ID that a user or seller uses for a marketplace.
     */
    martId?: string;
    statusInfo?: OptCapProgramInPrice200ApplicationJSONStatusInfo;
}
export declare class OptCapProgramInPriceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    optCapProgramInPrice200ApplicationJSONObject?: OptCapProgramInPrice200ApplicationJSON;
}
