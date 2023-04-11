import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { PortRange } from "./portrange";
/**
 * OK
 */
export declare class BaseService extends SpeakeasyBase {
    entityId?: string;
    entityType?: EntityTypeEnum;
    name?: string;
    portRanges?: PortRange[];
    protocol?: string;
}
