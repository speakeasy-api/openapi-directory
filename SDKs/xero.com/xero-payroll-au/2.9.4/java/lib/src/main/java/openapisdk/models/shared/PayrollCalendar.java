package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayrollCalendar {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CalendarType")
    public CalendarTypeEnum calendarType;
    public PayrollCalendar withCalendarType(CalendarTypeEnum calendarType) {
        this.calendarType = calendarType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public PayrollCalendar withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentDate")
    public String paymentDate;
    public PayrollCalendar withPaymentDate(String paymentDate) {
        this.paymentDate = paymentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayrollCalendarID")
    public String payrollCalendarID;
    public PayrollCalendar withPayrollCalendarId(String payrollCalendarID) {
        this.payrollCalendarID = payrollCalendarID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartDate")
    public String startDate;
    public PayrollCalendar withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedDateUTC")
    public String updatedDateUTC;
    public PayrollCalendar withUpdatedDateUtc(String updatedDateUTC) {
        this.updatedDateUTC = updatedDateUTC;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationErrors")
    public ValidationError[] validationErrors;
    public PayrollCalendar withValidationErrors(ValidationError[] validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}