import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SaveaccountconfigRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    saveaccountconfigRequest: shared.SaveaccountconfigRequest;
    /**
     * Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.
     */
    accountName: string;
}
/**
 * Items and products that belong to sellers.
 */
export declare class Saveaccountconfig200ApplicationJSONRules extends SpeakeasyBase {
    /**
     * SKUs' ID.
     */
    item?: number[];
    /**
     * Product's name.
     */
    product?: string[];
}
/**
 * [Matcher's rates](https://help.vtex.com/en/tutorial/understanding-vtex-matcher-scoring) to approve or reject [received SKUs](https://help.vtex.com/en/tutorial/cataloging-received-skus--tutorials_396) sent by sellers.
 */
export declare class Saveaccountconfig200ApplicationJSONScore extends SpeakeasyBase {
    /**
     * Score to approve SKUs sent by sellers.
     */
    approve?: number;
    /**
     * Score to reject SKUs sent by sellers.
     */
    reject?: number;
}
/**
 * OK
 */
export declare class Saveaccountconfig200ApplicationJSON extends SpeakeasyBase {
    /**
     * Type of approval configuration that apply to received SKUs sent by sellers. The possible values are:
     *
     * @remarks
     *
     * `default`: the matcher approves the SKU.
     *
     * `manual`: manual SKU's approvals.
     *
     * `AutoApprove`: automatic SKU's approvals.
     */
    matchFlux?: string;
    /**
     * [Matchers](https://help.vtex.com/en/tutorial/understanding-vtex-matcher-scoring) configurations for approving and rejecting [received SKUs](https://help.vtex.com/en/tutorial/cataloging-received-skus--tutorials_396) sent by sellers.
     */
    matchers?: any[];
    /**
     * Items and products that belong to sellers.
     */
    rules?: Saveaccountconfig200ApplicationJSONRules;
    /**
     * [Matcher's rates](https://help.vtex.com/en/tutorial/understanding-vtex-matcher-scoring) to approve or reject [received SKUs](https://help.vtex.com/en/tutorial/cataloging-received-skus--tutorials_396) sent by sellers.
     */
    score?: Saveaccountconfig200ApplicationJSONScore;
    /**
     * This attribute maps product and SKU's specifications between the marketplace and the seller.
     */
    specificationsMapping?: any[];
}
export declare class SaveaccountconfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    saveaccountconfig200ApplicationJSONObject?: Saveaccountconfig200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
