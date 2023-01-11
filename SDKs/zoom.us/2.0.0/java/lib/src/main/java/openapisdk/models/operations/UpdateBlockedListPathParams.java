package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBlockedListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blockedListId")
    public String blockedListId;
    public UpdateBlockedListPathParams withBlockedListId(String blockedListId) {
        this.blockedListId = blockedListId;
        return this;
    }
}