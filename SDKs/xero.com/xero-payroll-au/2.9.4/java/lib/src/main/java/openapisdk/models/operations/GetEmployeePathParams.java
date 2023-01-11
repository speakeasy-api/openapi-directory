package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmployeePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeID")
    public String employeeID;
    public GetEmployeePathParams withEmployeeId(String employeeID) {
        this.employeeID = employeeID;
        return this;
    }
}