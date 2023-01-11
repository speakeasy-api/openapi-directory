import { SpeakeasyBase } from "../../../internal/utils";
import { PreviewResult } from "./previewresult";
export declare class PostOrderPreviewResponseTypeReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class PostOrderPreviewResponseType extends SpeakeasyBase {
    previewResult?: PreviewResult;
    processId?: string;
    reasons?: PostOrderPreviewResponseTypeReasons[];
    success?: boolean;
}
