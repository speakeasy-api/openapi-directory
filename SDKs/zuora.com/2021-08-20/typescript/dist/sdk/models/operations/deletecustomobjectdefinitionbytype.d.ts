import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCustomObjectDefinitionByTypePathParams extends SpeakeasyBase {
    object: string;
}
export declare class DeleteCustomObjectDefinitionByTypeHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: Date;
}
export declare class DeleteCustomObjectDefinitionByTypeRequest extends SpeakeasyBase {
    pathParams: DeleteCustomObjectDefinitionByTypePathParams;
    headers: DeleteCustomObjectDefinitionByTypeHeaders;
}
export declare class DeleteCustomObjectDefinitionByTypeResponse extends SpeakeasyBase {
    contentType: string;
    deleteCustomObjectDefinitionByType200ApplicationJSONUriString?: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
