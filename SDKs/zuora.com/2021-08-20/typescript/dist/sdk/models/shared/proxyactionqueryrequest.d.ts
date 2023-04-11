import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProxyActionqueryRequestConf extends SpeakeasyBase {
    /**
     * Defines the batch size of the query result. The range is 1 - 2000 (inclusive). If a value higher than 2000 is submitted, only 2000 results are returned.
     *
     * @remarks
     *
     */
    batchSize?: number;
}
export declare class ProxyActionqueryRequest extends SpeakeasyBase {
    conf?: ProxyActionqueryRequestConf;
    /**
     * [ZOQL](https://knowledgecenter.zuora.com/DC_Developers/K_Zuora_Object_Query_Language) expression that specifies the object to query, the fields to retrieve, and any filters.
     *
     * @remarks
     *
     * **Note:** When querying one time charges from ProductRatePlanCharge, you need to specify the `ChargeType` value as `One-Time` rather than `OneTime`.
     *
     */
    queryString: string;
}
