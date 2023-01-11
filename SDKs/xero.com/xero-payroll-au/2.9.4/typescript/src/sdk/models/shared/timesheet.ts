import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimesheetStatusEnum } from "./timesheetstatusenum";
import { TimesheetLine } from "./timesheetline";
import { ValidationError } from "./validationerror";
import { TimesheetLineInput } from "./timesheetline";



export class Timesheet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmployeeID" })
  employeeID: string;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate: string;

  @SpeakeasyMetadata({ data: "json, name=Hours" })
  hours?: number;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TimesheetStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TimesheetID" })
  timesheetID?: string;

  @SpeakeasyMetadata({ data: "json, name=TimesheetLines", elemType: TimesheetLine })
  timesheetLines?: TimesheetLine[];

  @SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUTC?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError })
  validationErrors?: ValidationError[];
}


export class TimesheetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmployeeID" })
  employeeID: string;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate: string;

  @SpeakeasyMetadata({ data: "json, name=Hours" })
  hours?: number;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TimesheetStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TimesheetID" })
  timesheetID?: string;

  @SpeakeasyMetadata({ data: "json, name=TimesheetLines", elemType: TimesheetLineInput })
  timesheetLines?: TimesheetLineInput[];

  @SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError })
  validationErrors?: ValidationError[];
}
