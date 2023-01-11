import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DelVbPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class DelVbQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file_ids" })
  fileIds?: string;
}


export class DelVbRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DelVbPathParams;

  @SpeakeasyMetadata()
  queryParams: DelVbQueryParams;
}


export class DelVbResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
