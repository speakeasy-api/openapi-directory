import { SpeakeasyBase } from "../../../internal/utils";
import { EndBalance } from "./endbalance";
import { ErrorT } from "./error";
import { StartBalance } from "./startbalance";
import { StatementLine } from "./statementline";
/**
 * Current status of statements
 */
export declare enum StatementStatusEnum {
    Pending = "PENDING",
    Rejected = "REJECTED",
    Delivered = "DELIVERED"
}
/**
 * search results matching id for single statement
 */
export declare class Statement extends SpeakeasyBase {
    /**
     * The StartBalance plus all the Statement Line Amounts should be equal to the EndBalance Amount.
     */
    endBalance?: EndBalance;
    /**
     * Closing balance date ISO-8601 YYYY-MM-DD
     */
    endDate?: Date;
    errors?: ErrorT[];
    /**
     * The Xero generated feed connection Id that identifies the Xero Bank Account Container into which the statement should be delivered. This is obtained by calling GET FeedConnections.
     */
    feedConnectionId?: string;
    /**
     * GUID used to identify the Statement.
     */
    id?: string;
    /**
     * The starting balance of the statement
     */
    startBalance?: StartBalance;
    /**
     * Opening balance date (can be no older than one year from the current date) ISO-8601 YYYY-MM-DD
     */
    startDate?: Date;
    statementLineCount?: number;
    statementLines?: StatementLine[];
    /**
     * Current status of statements
     */
    status?: StatementStatusEnum;
}
