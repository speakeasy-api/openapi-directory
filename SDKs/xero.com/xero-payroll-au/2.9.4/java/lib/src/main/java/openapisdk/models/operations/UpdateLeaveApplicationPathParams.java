package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLeaveApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LeaveApplicationID")
    public String leaveApplicationID;
    public UpdateLeaveApplicationPathParams withLeaveApplicationId(String leaveApplicationID) {
        this.leaveApplicationID = leaveApplicationID;
        return this;
    }
}