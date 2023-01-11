import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebinarPanelistsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: number;
}


export class WebinarPanelistsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// WebinarPanelistsPanelistListPanelists
/** 
 * Panelist base object.
**/
export class WebinarPanelistsPanelistListPanelists extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=join_url" })
  joinUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// WebinarPanelistsPanelistList
/** 
 * List of panelists.
**/
export class WebinarPanelistsPanelistList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=panelists", elemType: WebinarPanelistsPanelistListPanelists })
  panelists?: WebinarPanelistsPanelistListPanelists[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class WebinarPanelistsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebinarPanelistsPathParams;

  @SpeakeasyMetadata()
  security: WebinarPanelistsSecurity;
}


export class WebinarPanelistsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  panelistList?: WebinarPanelistsPanelistList;

  @SpeakeasyMetadata()
  statusCode: number;
}
