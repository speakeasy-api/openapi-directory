import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
export declare class EntityIdWithTime extends SpeakeasyBase {
    /**
     * Entity Identifier
     */
    entityId?: string;
    entityType?: EntityTypeEnum;
    time?: number;
}
