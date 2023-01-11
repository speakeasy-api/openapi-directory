import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListWebinarParticipantsPathParams extends SpeakeasyBase {
    webinarId: string;
}
export declare class ListWebinarParticipantsQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
}
export declare class ListWebinarParticipants200ApplicationJsonParticipants extends SpeakeasyBase {
    id?: string;
    name?: string;
    userEmail?: string;
}
export declare class ListWebinarParticipants200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    participants?: ListWebinarParticipants200ApplicationJsonParticipants[];
    totalRecords?: number;
}
export declare class ListWebinarParticipantsRequest extends SpeakeasyBase {
    pathParams: ListWebinarParticipantsPathParams;
    queryParams: ListWebinarParticipantsQueryParams;
}
export declare class ListWebinarParticipantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listWebinarParticipants200ApplicationJSONObject?: ListWebinarParticipants200ApplicationJson;
}
