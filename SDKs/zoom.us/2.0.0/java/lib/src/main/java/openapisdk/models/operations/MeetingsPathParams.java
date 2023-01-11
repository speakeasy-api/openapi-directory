package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public MeetingsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}