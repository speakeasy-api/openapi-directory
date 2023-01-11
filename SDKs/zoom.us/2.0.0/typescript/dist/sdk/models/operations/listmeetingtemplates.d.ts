import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListMeetingTemplatesPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class ListMeetingTemplates200ApplicationJsonTemplates extends SpeakeasyBase {
    id?: string;
    name?: string;
    type?: number;
}
export declare class ListMeetingTemplates200ApplicationJson extends SpeakeasyBase {
    templates?: ListMeetingTemplates200ApplicationJsonTemplates[];
    totalRecords?: number;
}
export declare class ListMeetingTemplatesRequest extends SpeakeasyBase {
    pathParams: ListMeetingTemplatesPathParams;
}
export declare class ListMeetingTemplatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listMeetingTemplates200ApplicationJSONObject?: ListMeetingTemplates200ApplicationJson;
}
