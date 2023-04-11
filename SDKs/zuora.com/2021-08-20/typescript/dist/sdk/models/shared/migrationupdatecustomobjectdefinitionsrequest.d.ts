import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectDefinitionUpdateActionRequest } from "./customobjectdefinitionupdateactionrequest";
/**
 * Migration resource for object and namespace changes.
 */
export declare class MigrationUpdateCustomObjectDefinitionsRequest extends SpeakeasyBase {
    /**
     * The actions of updating custom object definitions, to be performed as parts of the migration.  Currently only one action per migration is supported.
     */
    actions: CustomObjectDefinitionUpdateActionRequest[];
}
