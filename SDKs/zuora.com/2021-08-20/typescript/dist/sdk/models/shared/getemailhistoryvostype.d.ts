import { SpeakeasyBase } from "../../../internal/utils";
import { GETEmailHistoryVOType } from "./getemailhistoryvotype";
export declare class GETEmailHistoryVOsType extends SpeakeasyBase {
    /**
     * A container for email histories.
     *
     * @remarks
     *
     */
    emailHistories?: GETEmailHistoryVOType[];
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
