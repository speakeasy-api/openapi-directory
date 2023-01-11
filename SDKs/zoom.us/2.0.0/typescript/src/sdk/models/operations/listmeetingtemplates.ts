import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListMeetingTemplatesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class ListMeetingTemplates200ApplicationJsonTemplates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


export class ListMeetingTemplates200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=templates", elemType: ListMeetingTemplates200ApplicationJsonTemplates })
  templates?: ListMeetingTemplates200ApplicationJsonTemplates[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListMeetingTemplatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListMeetingTemplatesPathParams;
}


export class ListMeetingTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listMeetingTemplates200ApplicationJSONObject?: ListMeetingTemplates200ApplicationJson;
}
