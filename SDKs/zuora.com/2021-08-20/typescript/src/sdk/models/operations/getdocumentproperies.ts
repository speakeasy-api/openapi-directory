import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDocumentProperiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentType" })
  documentType: shared.GlobalHeaderZuoraTrackIdEnum1;
}


export class GetDocumentProperiesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetDocumentProperiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDocumentProperiesPathParams;

  @SpeakeasyMetadata()
  headers: GetDocumentProperiesHeaders;
}


export class GetDocumentProperiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDocumentPropertiesResponseType?: shared.GetDocumentPropertiesResponseType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
