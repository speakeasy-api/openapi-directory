import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeDTO } from "./chargedto";
/**
 * Success
 */
export declare class FinanceDTO extends SpeakeasyBase {
    roi?: number;
    currencyId?: number;
    margin?: number;
    payables?: ChargeDTO[];
    profit?: number;
    receivables?: ChargeDTO[];
    totalAgreed?: number;
    totalCost?: number;
}
