import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutDocumentPropertiesPathParams extends SpeakeasyBase {
    documentPropertiesId: string;
}
export declare class PutDocumentPropertiesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutDocumentPropertiesRequest extends SpeakeasyBase {
    pathParams: PutDocumentPropertiesPathParams;
    headers: PutDocumentPropertiesHeaders;
    request: shared.PutDocumentPropertiesType;
}
export declare class PutDocumentPropertiesResponse extends SpeakeasyBase {
    contentType: string;
    getDocumentPropertiesResponseType?: shared.GetDocumentPropertiesResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}
