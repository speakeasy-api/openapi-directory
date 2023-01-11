import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DelGroupVbPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class DelGroupVbQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file_ids" })
  fileIds?: string;
}


export class DelGroupVbRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DelGroupVbPathParams;

  @SpeakeasyMetadata()
  queryParams: DelGroupVbQueryParams;
}


export class DelGroupVbResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
