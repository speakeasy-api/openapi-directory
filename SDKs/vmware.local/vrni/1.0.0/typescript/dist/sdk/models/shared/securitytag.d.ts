import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";
/**
 * OK
 */
export declare class SecurityTag extends SpeakeasyBase {
    description?: string;
    directSecurityGroups?: Reference[];
    entityId?: string;
    entityType?: EntityTypeEnum;
    name?: string;
    nsxManager?: Reference;
    securityGroups?: Reference[];
    vendorId?: string;
}
