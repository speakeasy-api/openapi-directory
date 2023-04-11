import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FeedV3 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Commit feed items
     *
     * @remarks
     * Commit items in the [feed](https://developers.vtex.com/docs/guides/orders-feed) queue.
     */
    commititemfeedorderstatus(req: operations.CommititemfeedorderstatusRequest, config?: AxiosRequestConfig): Promise<operations.CommititemfeedorderstatusResponse>;
    /**
     * Create or update feed configuration
     *
     * @remarks
     * The Orders Feed v3 is the best way to create order integrations. Below you can find details on the configuration API specification, and to know more see our [Feed v3 guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed) and our [order integration guide](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration)
     *
     *
  There are two types of filtering that can be used. The `FromWorkflow` type filters orders by status, whereas the `FromOrders` type uses JSONata expressions to filter orders according to any property in the orders JSON document. This enables stores to filter delivered orders and orders in which products have been added or removed, for example. To learn more, access the [JSONata documentation](https://docs.jsonata.org/overview.html) and test filtering JSONata expressions with our [Test JSONata expression](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/orders/expressions/jsonata) endpoint.
     */
    feedConfiguration(req: operations.FeedConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.FeedConfigurationResponse>;
    /**
     * Delete feed configuration
     *
     * @remarks
     * Deletes the configuration set up in [Feed v3](https://developers.vtex.com/docs/guides/orders-feed).
     */
    feedConfigurationDelete(req: operations.FeedConfigurationDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FeedConfigurationDeleteResponse>;
    /**
     * Get feed configuration
     *
     * @remarks
     * The Orders Feed v3 is the best way to create order integrations. Below you can find details on the configuration API specification, and to know more see our [Feed v3 guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed) and our [order integration guide](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration).
     *
     * > 📘 Onboarding guide
     * >
     * > Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.
     *
     *
     */
    getFeedConfiguration(req: operations.GetFeedConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetFeedConfigurationResponse>;
    /**
     * Retrieve feed items
     *
     * @remarks
     * Retrieve items from [feed](https://developers.vtex.com/docs/guides/orders-feed) queue.
     *
     * The event will be removed if the message `send retry` is equal to, or greater than the maximum retention period.
     *
     * > This API will return `404 Not Found` if there is no [Feed Configuration](https://developers.vtex.com/docs/guides/orders-feed) available for the given X-VTEX-API-AppKey.
     */
    getfeedorderstatus1(req: operations.Getfeedorderstatus1Request, config?: AxiosRequestConfig): Promise<operations.Getfeedorderstatus1Response>;
    /**
     * Test JSONata expression
     *
     * @remarks
     * This endpoint allows you to test a JSON document with a JSONata expression, returning `true` if the document meets the criteria posed in the expression, or `false` if it does not.
     *
     *
  Since JSONata expressions can be used to filter order updates in the [Orders API feed and hook](https://developers.vtex.com/docs/guides/orders-feed), this endpoint can be used to test an expression's results before configuring the [feed or hook](https://developers.vtex.com/docs/guides/orders-feed).
     *
     *
  Learn more about how to use JSONata expressions, in the [JSONata documentation](https://docs.jsonata.org/overview.html).
     */
    testJSONataExpression(req: operations.TestJSONataExpressionRequest, config?: AxiosRequestConfig): Promise<operations.TestJSONataExpressionResponse>;
}
