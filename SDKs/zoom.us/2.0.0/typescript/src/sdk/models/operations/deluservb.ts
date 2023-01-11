import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DelUserVbPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DelUserVbQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file_ids" })
  fileIds?: string;
}


export class DelUserVbRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DelUserVbPathParams;

  @SpeakeasyMetadata()
  queryParams: DelUserVbQueryParams;
}


export class DelUserVbResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
