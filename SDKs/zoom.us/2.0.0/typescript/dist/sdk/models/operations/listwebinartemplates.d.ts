import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListWebinarTemplatesPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class ListWebinarTemplates200ApplicationJsonTemplates extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class ListWebinarTemplates200ApplicationJson extends SpeakeasyBase {
    templates?: ListWebinarTemplates200ApplicationJsonTemplates[];
    totalRecords?: number;
}
export declare class ListWebinarTemplatesRequest extends SpeakeasyBase {
    pathParams: ListWebinarTemplatesPathParams;
}
export declare class ListWebinarTemplatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listWebinarTemplates200ApplicationJSONObject?: ListWebinarTemplates200ApplicationJson;
}
