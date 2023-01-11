import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimesheetLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EarningsRateID" })
  earningsRateID?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number[];

  @SpeakeasyMetadata({ data: "json, name=TrackingItemID" })
  trackingItemID?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUTC?: string;
}


export class TimesheetLineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EarningsRateID" })
  earningsRateID?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number[];

  @SpeakeasyMetadata({ data: "json, name=TrackingItemID" })
  trackingItemID?: string;
}
