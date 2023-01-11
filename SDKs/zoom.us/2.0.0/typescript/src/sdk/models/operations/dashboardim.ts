import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardImQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class DashboardImSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DashboardIm200ApplicationJsonUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calls_receive" })
  callsReceive?: number;

  @SpeakeasyMetadata({ data: "json, name=calls_send" })
  callsSend?: number;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=emoji_receive" })
  emojiReceive?: number;

  @SpeakeasyMetadata({ data: "json, name=emoji_send" })
  emojiSend?: number;

  @SpeakeasyMetadata({ data: "json, name=files_receive" })
  filesReceive?: number;

  @SpeakeasyMetadata({ data: "json, name=files_send" })
  filesSend?: number;

  @SpeakeasyMetadata({ data: "json, name=group_receive" })
  groupReceive?: number;

  @SpeakeasyMetadata({ data: "json, name=group_send" })
  groupSend?: number;

  @SpeakeasyMetadata({ data: "json, name=images_receive" })
  imagesReceive?: number;

  @SpeakeasyMetadata({ data: "json, name=images_send" })
  imagesSend?: number;

  @SpeakeasyMetadata({ data: "json, name=total_receive" })
  totalReceive?: number;

  @SpeakeasyMetadata({ data: "json, name=total_send" })
  totalSend?: number;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName?: string;

  @SpeakeasyMetadata({ data: "json, name=videos_receive" })
  videosReceive?: number;

  @SpeakeasyMetadata({ data: "json, name=videos_send" })
  videosSend?: number;

  @SpeakeasyMetadata({ data: "json, name=voice_receive" })
  voiceReceive?: number;

  @SpeakeasyMetadata({ data: "json, name=voice_send" })
  voiceSend?: number;
}


// DashboardIm200ApplicationJson
/** 
 * Pagination object.
**/
export class DashboardIm200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: DashboardIm200ApplicationJsonUsers })
  users?: DashboardIm200ApplicationJsonUsers[];
}


export class DashboardImRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DashboardImQueryParams;

  @SpeakeasyMetadata()
  security: DashboardImSecurity;
}


export class DashboardImResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dashboardIM200ApplicationJSONObject?: DashboardIm200ApplicationJson;
}
