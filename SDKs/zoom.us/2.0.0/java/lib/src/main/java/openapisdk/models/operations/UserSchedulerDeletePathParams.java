package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserSchedulerDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=schedulerId")
    public String schedulerId;
    public UserSchedulerDeletePathParams withSchedulerId(String schedulerId) {
        this.schedulerId = schedulerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UserSchedulerDeletePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}