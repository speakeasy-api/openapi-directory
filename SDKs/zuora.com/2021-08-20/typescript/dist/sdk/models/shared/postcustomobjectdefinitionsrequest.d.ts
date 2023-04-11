import { SpeakeasyBase } from "../../../internal/utils";
import { PostCustomObjectDefinitionsRequestDefinition } from "./postcustomobjectdefinitionsrequestdefinition";
/**
 * The custom object definitions to be created
 */
export declare class PostCustomObjectDefinitionsRequest extends SpeakeasyBase {
    /**
     * The custom object definitions. This object maps types to custom object definitions.
     *
     * @remarks
     *
     */
    definitions?: Record<string, PostCustomObjectDefinitionsRequestDefinition>;
}
