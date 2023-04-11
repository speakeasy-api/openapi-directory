import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const AutoCompleteServerList: readonly ["http://example.com/.{environment}.com.br"];
export declare class AutoCompleteRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    /**
     * Part of the string that will be searched.
     */
    productNameContains: string;
}
export declare class AutoCompleteTheRootSchemaItemsReturned extends SpeakeasyBase {
    /**
     * Item criteria.
     */
    criteria: string;
    /**
     * Item URL.
     */
    href: string;
    /**
     * Array of products.
     */
    items: any[];
    /**
     * Item name.
     */
    name: string;
    /**
     * Item thumbnail.
     */
    thumb: string;
    /**
     * Item thumbnail URL.
     */
    thumbUrl: string;
}
/**
 * The root schema comprises the entire JSON document.
 */
export declare class AutoCompleteTheRootSchema extends SpeakeasyBase {
    /**
     * Autocomplete returned items.
     */
    itemsReturned: AutoCompleteTheRootSchemaItemsReturned[];
}
export declare class AutoCompleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    theRootSchema?: AutoCompleteTheRootSchema;
}
