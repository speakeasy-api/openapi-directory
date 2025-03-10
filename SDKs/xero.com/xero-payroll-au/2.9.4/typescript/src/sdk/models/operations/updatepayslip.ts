/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdatePayslipSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oAuth2: string;
}

export class UpdatePayslipRequest extends SpeakeasyBase {
  /**
   * Payslip id for single object
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=PayslipID",
  })
  payslipID: string;

  @SpeakeasyMetadata({
    data: "request, media_type=application/json",
    elemType: shared.PayslipLines,
  })
  requestBody?: shared.PayslipLines[];

  /**
   * Xero identifier for Tenant
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=Xero-Tenant-Id",
  })
  xeroTenantId: string;
}

export class UpdatePayslipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * A successful request - currently returns empty array for JSON
   */
  @SpeakeasyMetadata()
  payslips?: shared.Payslips;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
