import { SpeakeasyBase } from "../../../internal/utils";
import { AccessDTO } from "./accessdto";
import { ViewBriefDTO } from "./viewbriefdto";
/**
 * Success
 */
export declare class ViewsBriefDTO extends SpeakeasyBase {
    access?: AccessDTO;
    list?: ViewBriefDTO[];
}
