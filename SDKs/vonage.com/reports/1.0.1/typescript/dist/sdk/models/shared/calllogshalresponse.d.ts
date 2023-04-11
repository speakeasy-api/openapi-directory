import { SpeakeasyBase } from "../../../internal/utils";
import { CallLogsEmbeddedObject } from "./calllogsembeddedobject";
import { Links } from "./links";
/**
 * Success
 */
export declare class CallLogsHalResponse extends SpeakeasyBase {
    embedded?: CallLogsEmbeddedObject;
    links?: Links;
    /**
     * Current page number
     */
    page?: number;
    /**
     * Number of records per page
     */
    pageSize?: number;
    /**
     * Total number of records
     */
    totalItems?: number;
    /**
     * Total number of pages
     */
    totalPage?: number;
}
