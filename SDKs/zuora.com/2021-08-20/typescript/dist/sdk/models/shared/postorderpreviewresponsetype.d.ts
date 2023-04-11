import { SpeakeasyBase } from "../../../internal/utils";
import { PreviewResult } from "./previewresult";
export declare class PostOrderPreviewResponseTypeReasons extends SpeakeasyBase {
    /**
     * The error code of response.
     *
     * @remarks
     *
     */
    code?: string;
    /**
     * The detail information of the error response
     *
     * @remarks
     *
     */
    message?: string;
}
export declare class PostOrderPreviewResponseType extends SpeakeasyBase {
    /**
     * The result of each type of preview. Returned only when the current request is preview call.
     */
    previewResult?: PreviewResult;
    /**
     * The Id of the process that handle the operation.
     *
     * @remarks
     *
     */
    processId?: string;
    reasons?: PostOrderPreviewResponseTypeReasons[];
    /**
     * Indicates whether the call succeeded.
     *
     * @remarks
     *
     */
    success?: boolean;
}
