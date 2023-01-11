package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommentApiGetCommentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entryId")
    public Integer entryId;
    public CommentApiGetCommentsQueryParams withEntryId(Integer entryId) {
        this.entryId = entryId;
        return this;
    }
}