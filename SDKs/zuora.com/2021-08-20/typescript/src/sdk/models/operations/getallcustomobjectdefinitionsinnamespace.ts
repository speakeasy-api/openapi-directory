import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllCustomObjectDefinitionsInNamespaceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=select" })
  select?: shared.GlobalHeaderAuthorizationOAuthEnum;
}


export class GetAllCustomObjectDefinitionsInNamespaceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Version" })
  zuoraVersion?: Date;
}


export class GetAllCustomObjectDefinitionsInNamespaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllCustomObjectDefinitionsInNamespaceQueryParams;

  @SpeakeasyMetadata()
  headers: GetAllCustomObjectDefinitionsInNamespaceHeaders;
}


export class GetAllCustomObjectDefinitionsInNamespaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAllCustomObjectDefinitionsInNamespaceResponse?: shared.GetAllCustomObjectDefinitionsInNamespaceResponse;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
