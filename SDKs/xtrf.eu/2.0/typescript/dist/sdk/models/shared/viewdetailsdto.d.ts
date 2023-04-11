import { SpeakeasyBase } from "../../../internal/utils";
import { AccessDTO } from "./accessdto";
import { ActionDTO } from "./actiondto";
import { FilterDTO } from "./filterdto";
import { ViewDTO } from "./viewdto";
/**
 * Success
 */
export declare class ViewDetailsDTO extends SpeakeasyBase {
    access?: AccessDTO;
    actions?: ActionDTO[];
    filter?: FilterDTO;
    view?: ViewDTO;
    viewId?: number;
}
