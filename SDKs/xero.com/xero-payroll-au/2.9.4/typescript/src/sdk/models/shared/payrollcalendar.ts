import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CalendarTypeEnum } from "./calendartypeenum";
import { ValidationError } from "./validationerror";



export class PayrollCalendar extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CalendarType" })
  calendarType?: CalendarTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentDate" })
  paymentDate?: string;

  @SpeakeasyMetadata({ data: "json, name=PayrollCalendarID" })
  payrollCalendarID?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUTC?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError })
  validationErrors?: ValidationError[];
}


export class PayrollCalendarInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CalendarType" })
  calendarType?: CalendarTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentDate" })
  paymentDate?: string;

  @SpeakeasyMetadata({ data: "json, name=PayrollCalendarID" })
  payrollCalendarID?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError })
  validationErrors?: ValidationError[];
}
