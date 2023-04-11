import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectDefinitionUpdateActionResponse } from "./customobjectdefinitionupdateactionresponse";
/**
 * OK
 */
export declare class MigrationUpdateCustomObjectDefinitionsResponse extends SpeakeasyBase {
    /**
     * The actions of updating custom object definitions, to be performed as parts of the migration.  Currently only one action per migration is supported.
     */
    actions?: CustomObjectDefinitionUpdateActionResponse[];
}
