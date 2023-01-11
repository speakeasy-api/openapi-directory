import { SpeakeasyBase } from "../../../internal/utils";
import { EndBalance } from "./endbalance";
import { ErrorT } from "./error";
import { StartBalance } from "./startbalance";
import { StatementLine } from "./statementline";
export declare class Statement extends SpeakeasyBase {
    endBalance?: EndBalance;
    endDate?: Date;
    errors?: ErrorT[];
    feedConnectionId?: string;
    id?: string;
    startBalance?: StartBalance;
    startDate?: Date;
    statementLineCount?: number;
    statementLines?: StatementLine[];
    status?: any;
}
