import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDocumentProperiesPathParams extends SpeakeasyBase {
    documentId: string;
    documentType: shared.GlobalHeaderZuoraTrackIdEnum1;
}
export declare class GetDocumentProperiesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetDocumentProperiesRequest extends SpeakeasyBase {
    pathParams: GetDocumentProperiesPathParams;
    headers: GetDocumentProperiesHeaders;
}
export declare class GetDocumentProperiesResponse extends SpeakeasyBase {
    contentType: string;
    getDocumentPropertiesResponseType?: shared.GetDocumentPropertiesResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}
