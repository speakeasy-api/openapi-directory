package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayrollCalendarPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayrollCalendarID")
    public String payrollCalendarID;
    public GetPayrollCalendarPathParams withPayrollCalendarId(String payrollCalendarID) {
        this.payrollCalendarID = payrollCalendarID;
        return this;
    }
}