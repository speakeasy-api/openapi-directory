import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListWebinarTemplatesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class ListWebinarTemplates200ApplicationJsonTemplates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class ListWebinarTemplates200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=templates", elemType: ListWebinarTemplates200ApplicationJsonTemplates })
  templates?: ListWebinarTemplates200ApplicationJsonTemplates[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListWebinarTemplatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListWebinarTemplatesPathParams;
}


export class ListWebinarTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listWebinarTemplates200ApplicationJSONObject?: ListWebinarTemplates200ApplicationJson;
}
