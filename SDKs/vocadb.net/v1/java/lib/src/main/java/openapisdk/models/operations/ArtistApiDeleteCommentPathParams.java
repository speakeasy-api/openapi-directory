package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtistApiDeleteCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commentId")
    public Integer commentId;
    public ArtistApiDeleteCommentPathParams withCommentId(Integer commentId) {
        this.commentId = commentId;
        return this;
    }
}