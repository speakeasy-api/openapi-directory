import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetBillingPreviewRunResponse
/** 
 * get billingPreviewRun response
**/
export class GetBillingPreviewRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assumeRenewal" })
  assumeRenewal?: string;

  @SpeakeasyMetadata({ data: "json, name=batch" })
  batch?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeTypeToExclude" })
  chargeTypeToExclude?: string;

  @SpeakeasyMetadata({ data: "json, name=createdById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=includingEvergreenSubscription" })
  includingEvergreenSubscription?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resultFileUrl" })
  resultFileUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=runNumber" })
  runNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=succeededAccounts" })
  succeededAccounts?: number;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=targetDate" })
  targetDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=totalAccounts" })
  totalAccounts?: number;

  @SpeakeasyMetadata({ data: "json, name=updatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedDate" })
  updatedDate?: Date;
}
