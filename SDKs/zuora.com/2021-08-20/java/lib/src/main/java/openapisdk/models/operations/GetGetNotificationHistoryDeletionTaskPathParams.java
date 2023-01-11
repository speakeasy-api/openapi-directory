package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetNotificationHistoryDeletionTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGetNotificationHistoryDeletionTaskPathParams withId(String id) {
        this.id = id;
        return this;
    }
}