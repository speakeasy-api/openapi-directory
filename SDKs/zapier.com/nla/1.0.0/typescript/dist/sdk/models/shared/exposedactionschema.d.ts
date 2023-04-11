import { SpeakeasyBase } from "../../../internal/utils";
export declare class ExposedActionSchema extends SpeakeasyBase {
    /**
     * Description of the action.
     */
    description: string;
    /**
     * The unique ID of the exposed action.
     */
    id: string;
    /**
     * The operation ID of the exposed action.
     */
    operationId: string;
    /**
     * Available hint fields for the action.
     */
    params: Record<string, any>;
}
