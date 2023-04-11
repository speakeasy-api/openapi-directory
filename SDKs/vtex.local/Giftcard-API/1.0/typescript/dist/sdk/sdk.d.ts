import { GiftCard } from "./giftcard";
import * as shared from "./models/shared";
import { Transaction } from "./transaction";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://vtex.local", "https://{accountName}.{environment}.com.br/api/"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * >ℹ️ Onboarding guide
 *
 * @remarks
 * >
 * > Check the new [Payments onboarding guide](https://developers.vtex.com/docs/guides/payments-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Payments and is organized by focusing on the developer's journey.
 *
 * The Gift Card is a payment method configured as a cash value associated with a client. It is used to grant a discount on the value of the order at the store.
 *
 * > ⚠ A Gift Card works as a **payment method**, not a promotion.
 */
export declare class SDK {
    giftCard: GiftCard;
    transaction: Transaction;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
