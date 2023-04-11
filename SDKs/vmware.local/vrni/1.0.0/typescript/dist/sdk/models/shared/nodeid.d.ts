import { SpeakeasyBase } from "../../../internal/utils";
import { NodeTypeEnum } from "./nodetypeenum";
export declare class NodeId extends SpeakeasyBase {
    entityType?: NodeTypeEnum;
    /**
     * Entity Identifier
     */
    id?: string;
}
