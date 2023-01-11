import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file-id" })
  fileId: string;
}


export class GetFilesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFilesPathParams;

  @SpeakeasyMetadata()
  headers: GetFilesHeaders;
}


export class GetFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
