package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignCallingPlanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public AssignCallingPlanPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}