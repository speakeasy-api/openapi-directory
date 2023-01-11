import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDocumentPropertiesPathParams extends SpeakeasyBase {
    documentPropertiesId: string;
}
export declare class DeleteDocumentPropertiesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteDocumentPropertiesRequest extends SpeakeasyBase {
    pathParams: DeleteDocumentPropertiesPathParams;
    headers: DeleteDocumentPropertiesHeaders;
}
export declare class DeleteDocumentPropertiesResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
