package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLeaveApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LeaveApplicationID")
    public String leaveApplicationID;
    public GetLeaveApplicationPathParams withLeaveApplicationId(String leaveApplicationID) {
        this.leaveApplicationID = leaveApplicationID;
        return this;
    }
}