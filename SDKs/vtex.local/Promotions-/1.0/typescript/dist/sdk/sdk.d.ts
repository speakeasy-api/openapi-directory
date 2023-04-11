import { Bundles } from "./bundles";
import { CampaignAudiences } from "./campaignaudiences";
import { Coupons } from "./coupons";
import * as shared from "./models/shared";
import { Notifications } from "./notifications";
import { PricesLegacyV1 } from "./priceslegacyv1";
import { PromotionsAndTaxes } from "./promotionsandtaxes";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://vtex.local", "https://{accountName}.{environment}.com.br"];
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
 *
 * @remarks
 * > Check the new [Promotions onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/promotions-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Promotions and is organized by focusing on the developer's journey.
 *
 *  The Promotions & Taxes API allows you to manage and retrieve all promotions, coupons and tax rules from your VTEX store.
 *
 *  ## Index
 *
 *  ### Coupons
 * `POST` [Create multiple coupons](https://developers.vtex.com/vtex-rest-api/reference/post_api-rnb-pvt-multiple-coupons)
 * `POST` [Create coupon](https://developers.vtex.com/vtex-rest-api/reference/post_api-rnb-pvt-coupon)
 * `GET` [Get coupon by coupon code](https://developers.vtex.com/vtex-rest-api/reference/getbycouponcode)
 * `GET` [Get archived coupon by coupon code](https://developers.vtex.com/vtex-rest-api/reference/getarchivedbycouponcode)
 * `POST` [Archive coupon by coupon code](https://developers.vtex.com/vtex-rest-api/reference/archivebycouponcode)
 * `POST` [Update coupon](https://developers.vtex.com/vtex-rest-api/reference/update)
 * `GET` [Get all coupons](https://developers.vtex.com/vtex-rest-api/reference/getall)
 * `POST` [Coupon Massive Generation](https://developers.vtex.com/vtex-rest-api/reference/massivegeneration)
 * `GET` [Get coupon usage](https://developers.vtex.com/vtex-rest-api/reference/getusage)
 * `POST` [Unarchive coupon by coupon code](https://developers.vtex.com/vtex-rest-api/reference/unarchivebycouponcode)
 *
 * ### Promotions and Taxes
 * `GET` [Get All Promotions](https://developers.vtex.com/vtex-rest-api/reference/getallbenefits)
 * `GET` [Get All Taxes](https://developers.vtex.com/vtex-rest-api/reference/getalltaxes)
 * `GET` [Get Promotion or Tax By ID](https://developers.vtex.com/vtex-rest-api/reference/getcalculatorconfigurationbyid)
 * `POST` [Create or Update Promotion or Tax](https://developers.vtex.com/vtex-rest-api/reference/createorupdatecalculatorconfiguration)
 * `POST` [Create Multiple SKU Promotion](https://developers.vtex.com/vtex-rest-api/reference/post_api-rnb-pvt-import-calculatorconfiguration)
 * `PUT` [Update Multiple SKU Promotion](https://developers.vtex.com/vtex-rest-api/reference/put_api-rnb-pvt-import-calculatorconfiguration-promotionid)
 * `POST` [Archive Promotion or Tax](https://developers.vtex.com/vtex-rest-api/reference/archivepromotion-1)
 * `POST` [Unarchive Promotion or Tax](https://developers.vtex.com/vtex-rest-api/reference/unarchivepromotion-1)
 * `GET` [List archived Promotions](https://developers.vtex.com/vtex-rest-api/reference/getarchivedpromotions)
 * `GET` [List archived Taxes](https://developers.vtex.com/vtex-rest-api/reference/getarchivedtaxes)
 *
 *
 * ### Campaign Audiences
 * `GET` [Get campaign audience configuration](https://developers.vtex.com/vtex-rest-api/reference/getcampaignconfiguration)
 * `POST` [Create campaign audience](https://developers.vtex.com/vtex-rest-api/reference/setcampaignconfiguration)
 */
export declare class SDK {
    bundles: Bundles;
    campaignAudiences: CampaignAudiences;
    coupons: Coupons;
    notifications: Notifications;
    pricesLegacyV1: PricesLegacyV1;
    promotionsAndTaxes: PromotionsAndTaxes;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
