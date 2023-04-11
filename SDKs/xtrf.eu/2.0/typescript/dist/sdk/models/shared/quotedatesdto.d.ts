import { SpeakeasyBase } from "../../../internal/utils";
import { TimeDTO } from "./timedto";
/**
 * Success
 */
export declare class QuoteDatesDTO extends SpeakeasyBase {
    createdOn?: TimeDTO;
    deadline?: TimeDTO;
    offerExpiry?: TimeDTO;
    startDate?: TimeDTO;
}
