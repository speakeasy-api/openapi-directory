import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomObjectDefinitionByTypePathParams extends SpeakeasyBase {
    object: string;
}
export declare class GetCustomObjectDefinitionByTypeHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: Date;
}
export declare class GetCustomObjectDefinitionByTypeRequest extends SpeakeasyBase {
    pathParams: GetCustomObjectDefinitionByTypePathParams;
    headers: GetCustomObjectDefinitionByTypeHeaders;
}
export declare class GetCustomObjectDefinitionByTypeResponse extends SpeakeasyBase {
    commonErrorResponse?: shared.CommonErrorResponse;
    contentType: string;
    customObjectDefinition?: shared.CustomObjectDefinition;
    headers: Record<string, string[]>;
    statusCode: number;
}
