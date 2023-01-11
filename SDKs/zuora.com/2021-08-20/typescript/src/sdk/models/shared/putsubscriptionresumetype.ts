import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutSubscriptionResumeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationOrder" })
  applicationOrder?: string[];

  @SpeakeasyMetadata({ data: "json, name=applyCredit" })
  applyCredit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=applyCreditBalance" })
  applyCreditBalance?: boolean;

  @SpeakeasyMetadata({ data: "json, name=collect" })
  collect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contractEffectiveDate" })
  contractEffectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=documentDate" })
  documentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=extendsTerm" })
  extendsTerm?: boolean;

  @SpeakeasyMetadata({ data: "json, name=invoice" })
  invoice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=invoiceCollect" })
  invoiceCollect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=invoiceTargetDate" })
  invoiceTargetDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=resumePeriods" })
  resumePeriods?: string;

  @SpeakeasyMetadata({ data: "json, name=resumePeriodsType" })
  resumePeriodsType?: string;

  @SpeakeasyMetadata({ data: "json, name=resumePolicy" })
  resumePolicy: string;

  @SpeakeasyMetadata({ data: "json, name=resumeSpecificDate" })
  resumeSpecificDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=runBilling" })
  runBilling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=targetDate" })
  targetDate?: Date;
}
