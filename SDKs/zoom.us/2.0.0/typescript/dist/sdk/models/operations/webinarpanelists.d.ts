import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarPanelistsPathParams extends SpeakeasyBase {
    webinarId: number;
}
export declare class WebinarPanelistsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Panelist base object.
**/
export declare class WebinarPanelistsPanelistListPanelists extends SpeakeasyBase {
    email?: string;
    id?: string;
    joinUrl?: string;
    name?: string;
}
/**
 * List of panelists.
**/
export declare class WebinarPanelistsPanelistList extends SpeakeasyBase {
    panelists?: WebinarPanelistsPanelistListPanelists[];
    totalRecords?: number;
}
export declare class WebinarPanelistsRequest extends SpeakeasyBase {
    pathParams: WebinarPanelistsPathParams;
    security: WebinarPanelistsSecurity;
}
export declare class WebinarPanelistsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    panelistList?: WebinarPanelistsPanelistList;
    statusCode: number;
}
