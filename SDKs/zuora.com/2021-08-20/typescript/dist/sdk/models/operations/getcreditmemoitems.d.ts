import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETCreditMemoItemsRequest extends SpeakeasyBase {
    /**
     * An entity ID. If you have [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity) enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header.
     *
     * @remarks
     *
     */
    zuoraEntityIds?: string;
    /**
     * A custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.
     *
     * @remarks
     *
     * The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (`:`), semicolon (`;`), double quote (`"`), and quote (`'`).
     *
     */
    zuoraTrackId?: string;
    /**
     * This parameter filters the response based on the `amount` field.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * This parameter filters the response based on the `appliedAmount` field.
     *
     * @remarks
     *
     */
    appliedAmount?: number;
    /**
     * This parameter filters the response based on the `createdById` field.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * This parameter filters the response based on the `createdDate` field.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * The unique ID of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172.
     *
     * @remarks
     *
     */
    creditMemoId: string;
    /**
     * This parameter filters the response based on the `id` field.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Number of rows returned per page.
     *
     * @remarks
     *
     */
    pageSize?: number;
    /**
     * This parameter filters the response based on the `refundAmount` field.
     *
     * @remarks
     *
     */
    refundAmount?: number;
    /**
     * This parameter filters the response based on the `serviceEndDate` field.
     *
     * @remarks
     *
     */
    serviceEndDate?: Date;
    /**
     * This parameter filters the response based on the `serviceStartDate` field.
     *
     * @remarks
     *
     */
    serviceStartDate?: Date;
    /**
     * This parameter filters the response based on the `sku` field.
     *
     * @remarks
     *
     */
    sku?: string;
    /**
     * This parameter filters the response based on the `skuName` field.
     *
     * @remarks
     *
     */
    skuName?: string;
    /**
     * This parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on.
     *
     * @remarks
     *
     * A sortable field uses the following form:
     *
     * *operator* *field_name*
     *
     * You can use at most two sortable fields in one URL path. Use a comma to separate sortable fields. For example:  *operator* *field_name*, *operator* *field_name*
     *
     * *operator* is used to mark the order of sequencing. The operator is optional. If you only specify the sortable field without any operator, the response data is sorted in descending order by this field.
     *
     *   - The `-` operator indicates an ascending order.
     *   - The `+` operator indicates a descending order.
     *
     * By default, the response data is displayed in descending order by updated date.
     *
     * *field_name* indicates the name of a sortable field. The supported sortable fields of this operation are as below:
     *
     *   - amount
     *   - appliedAmount
     *   - createdById
     *   - createdDate
     *   - id
     *   - refundAmount
     *   - serviceEndDate
     *   - serviceStartDate
     *   - sku
     *   - skuName
     *   - sourceItemId
     *   - subscriptionId
     *   - updatedById
     *   - updatedDate
     *
     * Examples:
     *
     * - /v1/creditmemos/402890245c7ca371015c7cb40ac30015/items?sort=createdDate
     *
     * - /v1/creditmemos/402890245c7ca371015c7cb40ac30015/items?amount=100&sort=createdDate
     *
     */
    sort?: string;
    /**
     * This parameter filters the response based on the `sourceItemId` field.
     *
     * @remarks
     *
     */
    sourceItemId?: string;
    /**
     * This parameter filters the response based on the `subscriptionId` field.
     *
     * @remarks
     *
     */
    subscriptionId?: string;
    /**
     * This parameter filters the response based on the `updatedById` field.
     *
     * @remarks
     *
     */
    updatedById?: string;
    /**
     * This parameter filters the response based on the `updatedDate` field.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
    /**
     *
     * @remarks
     * The minor version of the Zuora REST API. See [Minor Version](https://www.zuora.com/developer/api-reference/#section/API-Versions/Minor-Version) for information about REST API version control.
     *
     * This header affects the availability of the following response fields:
     * * `items` > `creditTaxItems`
     * * `items` > `taxationItems`
     * * `items` > `comment`
     * * `items` > `description`
     *
     */
    zuoraVersion?: string;
}
export declare class GETCreditMemoItemsResponse extends SpeakeasyBase {
    contentType: string;
    getCreditMemoItemsListType?: shared.GETCreditMemoItemsListType;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
