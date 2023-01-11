import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectDefinition } from "./customobjectdefinition";
export declare class GetAllCustomObjectDefinitionsInNamespaceResponse extends SpeakeasyBase {
    count?: number;
    definitions?: Record<string, CustomObjectDefinition>;
}
