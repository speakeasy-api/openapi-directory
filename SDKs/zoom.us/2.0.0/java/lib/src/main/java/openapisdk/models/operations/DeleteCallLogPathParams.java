package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCallLogPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=callLogId")
    public String callLogId;
    public DeleteCallLogPathParams withCallLogId(String callLogId) {
        this.callLogId = callLogId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DeleteCallLogPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}