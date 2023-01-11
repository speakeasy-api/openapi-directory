import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApplicationsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationObjectId" })
  applicationObjectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantID: string;
}


export class ApplicationsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApplicationsGetPathParams;

  @SpeakeasyMetadata()
  queryParams: ApplicationsGetQueryParams;
}


export class ApplicationsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  application?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
