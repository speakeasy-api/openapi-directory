import { SpeakeasyBase } from "../../../internal/utils";
import { TimeDTO } from "./timedto";
/**
 * Success
 */
export declare class ProjectDatesDTO extends SpeakeasyBase {
    actualDeliveryDate?: TimeDTO;
    actualStartDate?: TimeDTO;
    deadline?: TimeDTO;
    startDate?: TimeDTO;
}
