import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostApiRnbPvtImportCalculatorConfigurationRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody?: Uint8Array;
    /**
     * Condition that will accumulate the Promotion with manual prices or not.
     */
    xVTEXAccumulateWithManualPrices: boolean;
    /**
     * Promotion Name.
     */
    xVTEXCalculatorName: string;
    /**
     * Cluster that will be included in the Promotion. To add multiple clusters, create a header for each one of them.
     */
    xVTEXClusterExpression?: string;
    /**
     * This header allows implementing the Promotion in multiples client clusters. You can set the value as `all` - the Promotion will be valid to all the clusters - or `any` - the Promotion will be valid to any of the clusters.
     */
    xVTEXClusterOperator?: string;
    /**
     * Defines if the Promotion is cumulative with other promotions.
     */
    xVTEXCumulative?: boolean;
    /**
     * Promotion end date.
     */
    xVTEXEndDate: string;
    /**
     * Promotion start date.
     */
    xVTEXStartDate: string;
}
export declare class PostApiRnbPvtImportCalculatorConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
