import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectDefinition } from "./customobjectdefinition";
/**
 * OK
 */
export declare class GETAllCustomObjectDefinitionsInNamespaceResponse extends SpeakeasyBase {
    /**
     * The number of objects in the `definitions` object. The value of this field is the number of custom object definitions in the namespace.
     */
    count?: number;
    /**
     * The custom object definitions. This object maps types to custom object definitions.
     */
    definitions?: Record<string, CustomObjectDefinition>;
}
