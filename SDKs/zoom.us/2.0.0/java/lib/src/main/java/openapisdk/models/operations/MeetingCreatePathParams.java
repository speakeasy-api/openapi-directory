package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public MeetingCreatePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}