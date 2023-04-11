import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPotHoldingsSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class GetPotHoldingsRequest extends SpeakeasyBase {
    /**
     * Pot Id
     */
    potId: string;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetPotHoldings500ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
 */
export declare class GetPotHoldings429ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * The specified resource was not found
 */
export declare class GetPotHoldings404ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
 */
export declare class GetPotHoldings403ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * You do not have permissions to access this resource.
 */
export declare class GetPotHoldings401ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Request is not complete and may have one or more validations errors. Please check the error message and the code
 */
export declare class GetPotHoldings400ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare class GetPotHoldings200ApplicationJSONHoldings extends SpeakeasyBase {
    /**
     * Additional external details of the holding. This may be populated in reconciliation process
     */
    additionalExternalDetails?: Record<string, any>;
    /**
     * Per-unit book cost for a particular holding (applicable for investment product holdings only)
     */
    averageBookCost?: string;
    /**
     * Total book cost for the total units currently held within the pot (applicable for investment product holdings only)
     */
    costOfHolding?: string;
    /**
     * Currency of the pot
     */
    currency: string;
    /**
     * Free quantity of the investment product holding. Will be empty for the cash holding
     */
    freeQuantity?: string;
    /**
     * Free value of the holding
     */
    freeValue: string;
    /**
     * Investment product id of the holding. Will be 'cash' for cash holdings
     */
    investmentProductId: string;
    /**
     * Investment product name of the holding. Will be empty for cash holdings
     */
    investmentProductName?: string;
    /**
     * Locked quantity of the investment product holding. Will be empty for the cash holding
     */
    lockedQuantity?: string;
    /**
     * Locked value of the holding
     */
    lockedValue: string;
    /**
     * Last price available for the investment product. Will be empty for the cash holding
     */
    price?: string;
    /**
     * Last price updated date for the investment product. Will be empty for the cash holding
     */
    priceDate?: string;
    /**
     * Settled cash amount within the pot (applicable for cash holdings only)
     */
    settledCashPosition?: string;
    /**
     * Total quantity of the investment product holding. Will be empty for the cash holding
     */
    totalQuantity?: string;
    /**
     * Total value of the holding
     */
    totalValue: string;
}
/**
 * success
 */
export declare class GetPotHoldings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Array of holdings belonging to a respective pot
     */
    holdings: GetPotHoldings200ApplicationJSONHoldings[];
    potId: string;
}
export declare class GetPotHoldingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getPotHoldings200ApplicationJSONObject?: GetPotHoldings200ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    getPotHoldings400ApplicationJSONObject?: GetPotHoldings400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getPotHoldings401ApplicationJSONObject?: GetPotHoldings401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getPotHoldings403ApplicationJSONObject?: GetPotHoldings403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getPotHoldings404ApplicationJSONObject?: GetPotHoldings404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getPotHoldings429ApplicationJSONObject?: GetPotHoldings429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getPotHoldings500ApplicationJSONObject?: GetPotHoldings500ApplicationJSON;
}
