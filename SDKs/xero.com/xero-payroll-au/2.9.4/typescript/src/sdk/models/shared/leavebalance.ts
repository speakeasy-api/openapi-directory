import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LeaveBalance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LeaveName" })
  leaveName?: string;

  @SpeakeasyMetadata({ data: "json, name=LeaveTypeID" })
  leaveTypeID?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=TypeOfUnits" })
  typeOfUnits?: string;
}
