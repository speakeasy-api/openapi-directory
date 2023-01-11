package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMeetingTemplatesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public ListMeetingTemplatesPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}