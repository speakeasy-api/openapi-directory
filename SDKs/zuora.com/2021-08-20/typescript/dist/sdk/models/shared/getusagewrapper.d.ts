import { SpeakeasyBase } from "../../../internal/utils";
import { GETUsageType } from "./getusagetype";
export declare class GETUsageWrapper extends SpeakeasyBase {
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
    /**
     * Contains one or more usage items.
     *
     * @remarks
     *
     */
    usage?: GETUsageType[];
}
