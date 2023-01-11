package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscussionApiDeleteCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commentId")
    public Integer commentId;
    public DiscussionApiDeleteCommentPathParams withCommentId(Integer commentId) {
        this.commentId = commentId;
        return this;
    }
}