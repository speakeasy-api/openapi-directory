import { SpeakeasyBase } from "../../../internal/utils";
import { TimeDTO } from "./timedto";
/**
 * Success
 */
export declare class CurrencyHistoryDTO extends SpeakeasyBase {
    dateFrom?: TimeDTO;
    exchangeRate?: string;
    lastModification?: TimeDTO;
    originDetails?: string;
    publicationDate?: TimeDTO;
}
