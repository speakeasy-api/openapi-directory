import { SpeakeasyBase } from "../../../internal/utils";
import { GETRSDetailForProductChargeType } from "./getrsdetailforproductchargetype";
export declare class GETRSDetailsByProductChargeType extends SpeakeasyBase {
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * How revenue will be recognized over time.
     *
     * @remarks
     *
     */
    revenueSchedules?: GETRSDetailForProductChargeType[];
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
}
