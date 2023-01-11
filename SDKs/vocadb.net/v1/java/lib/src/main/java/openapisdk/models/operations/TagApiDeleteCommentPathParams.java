package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagApiDeleteCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commentId")
    public Integer commentId;
    public TagApiDeleteCommentPathParams withCommentId(Integer commentId) {
        this.commentId = commentId;
        return this;
    }
}