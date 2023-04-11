import { SpeakeasyBase } from "../../../internal/utils";
import { GETCalloutHistoryVOType } from "./getcallouthistoryvotype";
export declare class GETCalloutHistoryVOsType extends SpeakeasyBase {
    /**
     * A container for callout histories.
     *
     * @remarks
     *
     */
    calloutHistories?: GETCalloutHistoryVOType[];
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
}
