package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommentApiGetCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=entryType")
    public CommentApiGetCommentsEntryTypeEnum entryType;
    public CommentApiGetCommentsPathParams withEntryType(CommentApiGetCommentsEntryTypeEnum entryType) {
        this.entryType = entryType;
        return this;
    }
}