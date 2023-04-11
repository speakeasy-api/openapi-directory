import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTotalPotHoldingsSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class GetTotalPotHoldingsRequest extends SpeakeasyBase {
    /**
     * Id of the investor
     */
    investorId: string;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetTotalPotHoldings500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetTotalPotHoldings429ApplicationJSON extends SpeakeasyBase {
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
export declare class GetTotalPotHoldings404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetTotalPotHoldings403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetTotalPotHoldings401ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare class GetTotalPotHoldings200ApplicationJSONPotsHoldings extends SpeakeasyBase {
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
export declare class GetTotalPotHoldings200ApplicationJSONPots extends SpeakeasyBase {
    /**
     * Array of holdings belonging to a respective pot
     */
    holdings: GetTotalPotHoldings200ApplicationJSONPotsHoldings[];
    potId: string;
}
/**
 * success
 */
export declare class GetTotalPotHoldings200ApplicationJSON extends SpeakeasyBase {
    pots: GetTotalPotHoldings200ApplicationJSONPots[];
}
export declare class GetTotalPotHoldingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getTotalPotHoldings200ApplicationJSONObject?: GetTotalPotHoldings200ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getTotalPotHoldings401ApplicationJSONObject?: GetTotalPotHoldings401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getTotalPotHoldings403ApplicationJSONObject?: GetTotalPotHoldings403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getTotalPotHoldings404ApplicationJSONObject?: GetTotalPotHoldings404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getTotalPotHoldings429ApplicationJSONObject?: GetTotalPotHoldings429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getTotalPotHoldings500ApplicationJSONObject?: GetTotalPotHoldings500ApplicationJSON;
}
