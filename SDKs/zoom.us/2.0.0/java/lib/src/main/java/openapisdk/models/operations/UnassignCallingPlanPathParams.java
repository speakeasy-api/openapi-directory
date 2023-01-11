package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnassignCallingPlanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=type")
    public String type;
    public UnassignCallingPlanPathParams withType(String type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UnassignCallingPlanPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}