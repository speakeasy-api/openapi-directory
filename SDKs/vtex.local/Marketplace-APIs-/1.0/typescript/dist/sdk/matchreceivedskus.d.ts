import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Match SKU suggestions received in the marketplace
 */
export declare class MatchReceivedSKUs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Match Received SKUs individually
     *
     * @remarks
     * All SKUs sent from a seller to a marketplace must be reviewed and matched. Actions in the matching process are added in the request body through the [matchType] object. Match type actions include:
     *
     * 1. `newproduct`: match the SKU as a new product.
     *
     * 2. `itemMatch`: associate the received SKU to an existing SKU.
     *
     * 3. `productMatch`: associate the received SKU to an existing product.
     *
     * 4. `deny`: deny the received SKU.
     *
     * 5. `pending`: the received SKU requires attention.
     *
     * 6. `incomplete`: the received SKU is lacking information to be matched.
     *
     * 7. `insufficientScore`: the score given by the Matcher to this received SKU doesn't qualify it to be matched.
     *
     * Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.
     */
    match(req: operations.MatchRequest, config?: AxiosRequestConfig): Promise<operations.MatchResponse>;
    /**
     * Match Multiple Received SKUs
     *
     * @remarks
     * This endpoint allows the user to bulk approve, deny, or associate received SKUs. In a single request, you can match up to 25 received SKUs from your sellers.
     *
     * Through the `actionName` attribute you can select the operation you want to apply to the received SKU.
     *
     * Actions include:
     *
     * 1. `newproduct`: match the SKU as a new product.
     *
     * 2. `skuassociation`: associate the received SKU to an existing SKU.
     *
     * 3. `productassociation`: associate the received SKU to an existing product.
     *
     * 4. `deny`: deny the received SKU.
     */
    matchMultiple(req: operations.MatchMultipleRequest, config?: AxiosRequestConfig): Promise<operations.MatchMultipleResponse>;
}
