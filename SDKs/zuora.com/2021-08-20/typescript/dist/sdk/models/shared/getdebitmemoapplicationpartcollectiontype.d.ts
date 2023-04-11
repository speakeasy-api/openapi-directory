import { SpeakeasyBase } from "../../../internal/utils";
import { GetDebitMemoApplicationPartType } from "./getdebitmemoapplicationparttype";
/**
 * OK
 */
export declare class GetDebitMemoApplicationPartCollectionType extends SpeakeasyBase {
    /**
     * Container for application parts.
     *
     * @remarks
     *
     */
    applicationParts?: GetDebitMemoApplicationPartType[];
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
}
