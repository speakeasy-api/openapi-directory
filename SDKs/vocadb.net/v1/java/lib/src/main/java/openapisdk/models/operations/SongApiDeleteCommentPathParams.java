package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongApiDeleteCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commentId")
    public Integer commentId;
    public SongApiDeleteCommentPathParams withCommentId(Integer commentId) {
        this.commentId = commentId;
        return this;
    }
}