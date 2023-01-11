package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommentApiDeleteCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commentId")
    public Integer commentId;
    public CommentApiDeleteCommentPathParams withCommentId(Integer commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=entryType")
    public CommentApiDeleteCommentEntryTypeEnum entryType;
    public CommentApiDeleteCommentPathParams withEntryType(CommentApiDeleteCommentEntryTypeEnum entryType) {
        this.entryType = entryType;
        return this;
    }
}