import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This extends from ExecuteRequestBase to add the preview_only option.
 *
 * @remarks
 *
 * (1) Providers who allow side effects or (2) actions that do not have a side effect should use this class.
 */
export declare class ExecuteRequest extends SpeakeasyBase {
    /**
     * Plain english instructions. Provide as much detail as possible.
     */
    instructions: string;
    /**
     * If true, we will not execute the action, but will return the params of the preview.
     */
    previewOnly?: boolean;
}
