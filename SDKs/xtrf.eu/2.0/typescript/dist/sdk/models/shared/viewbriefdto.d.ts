import { SpeakeasyBase } from "../../../internal/utils";
import { AccessDTO } from "./accessdto";
import { LastModificationDTO } from "./lastmodificationdto";
export declare class ViewBriefDTO extends SpeakeasyBase {
    access?: AccessDTO;
    current?: boolean;
    id?: number;
    lastModification?: LastModificationDTO;
    mine?: boolean;
    name?: string;
    owner?: string;
}
