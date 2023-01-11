package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteABlockedListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blockedListId")
    public String blockedListId;
    public DeleteABlockedListPathParams withBlockedListId(String blockedListId) {
        this.blockedListId = blockedListId;
        return this;
    }
}