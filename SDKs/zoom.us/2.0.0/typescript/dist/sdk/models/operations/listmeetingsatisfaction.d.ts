import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListMeetingSatisfactionQueryParams extends SpeakeasyBase {
    from?: Date;
    to?: Date;
}
export declare class ListMeetingSatisfactionSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ListMeetingSatisfaction200ApplicationJsonClientSatisfaction extends SpeakeasyBase {
    date?: Date;
    goodCount?: number;
    noneCount?: number;
    notGoodCount?: number;
    satisfactionPercent?: number;
}
export declare class ListMeetingSatisfaction200ApplicationJson extends SpeakeasyBase {
    clientSatisfaction?: ListMeetingSatisfaction200ApplicationJsonClientSatisfaction[];
    from?: Date;
    to?: Date;
    totalRecords?: number;
}
export declare class ListMeetingSatisfactionRequest extends SpeakeasyBase {
    queryParams: ListMeetingSatisfactionQueryParams;
    security: ListMeetingSatisfactionSecurity;
}
export declare class ListMeetingSatisfactionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listMeetingSatisfaction200ApplicationJSONObject?: ListMeetingSatisfaction200ApplicationJson;
}
