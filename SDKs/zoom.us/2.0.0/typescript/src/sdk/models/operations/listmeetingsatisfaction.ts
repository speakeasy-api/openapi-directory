import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListMeetingSatisfactionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: Date;
}


export class ListMeetingSatisfactionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ListMeetingSatisfaction200ApplicationJsonClientSatisfaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=good_count" })
  goodCount?: number;

  @SpeakeasyMetadata({ data: "json, name=none_count" })
  noneCount?: number;

  @SpeakeasyMetadata({ data: "json, name=not_good_count" })
  notGoodCount?: number;

  @SpeakeasyMetadata({ data: "json, name=satisfaction_percent" })
  satisfactionPercent?: number;
}


export class ListMeetingSatisfaction200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_satisfaction", elemType: ListMeetingSatisfaction200ApplicationJsonClientSatisfaction })
  clientSatisfaction?: ListMeetingSatisfaction200ApplicationJsonClientSatisfaction[];

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListMeetingSatisfactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListMeetingSatisfactionQueryParams;

  @SpeakeasyMetadata()
  security: ListMeetingSatisfactionSecurity;
}


export class ListMeetingSatisfactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listMeetingSatisfaction200ApplicationJSONObject?: ListMeetingSatisfaction200ApplicationJson;
}
