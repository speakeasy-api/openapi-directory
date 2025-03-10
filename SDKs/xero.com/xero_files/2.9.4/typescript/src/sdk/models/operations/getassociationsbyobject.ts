/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetAssociationsByObjectSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oAuth2: string;
}

export class GetAssociationsByObjectRequest extends SpeakeasyBase {
  /**
   * Object id for single object
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=ObjectId",
  })
  objectId: string;

  /**
   * Xero identifier for Tenant
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=xero-tenant-id",
  })
  xeroTenantId: string;
}

export class GetAssociationsByObjectResponse extends SpeakeasyBase {
  /**
   * search results matching criteria
   */
  @SpeakeasyMetadata({ elemType: shared.Association })
  associations?: shared.Association[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
