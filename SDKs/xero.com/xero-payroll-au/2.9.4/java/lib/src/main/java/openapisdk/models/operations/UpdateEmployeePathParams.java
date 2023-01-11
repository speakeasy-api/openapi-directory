package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEmployeePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeID")
    public String employeeID;
    public UpdateEmployeePathParams withEmployeeId(String employeeID) {
        this.employeeID = employeeID;
        return this;
    }
}