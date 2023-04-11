import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GiftCard {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create GiftCard
     *
     * @remarks
     * Creates a GiftCard for a specific user
     */
    createGiftCard(req: operations.CreateGiftCardRequest, config?: AxiosRequestConfig): Promise<operations.CreateGiftCardResponse>;
    /**
     * Get GiftCard by ID
     *
     * @remarks
     * Returns associated data for a specified giftcardId.
     */
    getGiftCardbyID(req: operations.GetGiftCardbyIDRequest, config?: AxiosRequestConfig): Promise<operations.GetGiftCardbyIDResponse>;
    /**
     * Get GiftCard using JSON
     *
     * @remarks
     * Returns the giftcards based on the cart data.
     */
    getGiftCardusingJSON(req: operations.GetGiftCardusingJSONRequest, config?: AxiosRequestConfig): Promise<operations.GetGiftCardusingJSONResponse>;
}
