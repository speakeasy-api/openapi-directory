package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetABlockedListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blockedListId")
    public String blockedListId;
    public GetABlockedListPathParams withBlockedListId(String blockedListId) {
        this.blockedListId = blockedListId;
        return this;
    }
}