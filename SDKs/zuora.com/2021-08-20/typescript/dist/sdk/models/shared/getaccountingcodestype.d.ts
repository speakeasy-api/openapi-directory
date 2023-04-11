import { SpeakeasyBase } from "../../../internal/utils";
import { GETAccountingCodeItemWithoutSuccessType } from "./getaccountingcodeitemwithoutsuccesstype";
export declare class GETAccountingCodesType extends SpeakeasyBase {
    /**
     * An array of all the accounting codes in your chart of accounts. Each accounting code has the following fields.
     *
     * @remarks
     *
     */
    accountingCodes?: GETAccountingCodeItemWithoutSuccessType[];
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
