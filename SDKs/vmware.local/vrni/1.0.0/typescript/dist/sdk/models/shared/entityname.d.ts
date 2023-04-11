import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
/**
 * OK
 */
export declare class EntityName extends SpeakeasyBase {
    /**
     * Entity Identifier
     */
    entityId?: string;
    entityType?: EntityTypeEnum;
    name?: string;
    time?: number;
}
