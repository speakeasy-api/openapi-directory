package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongListApiDeleteCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commentId")
    public Integer commentId;
    public SongListApiDeleteCommentPathParams withCommentId(Integer commentId) {
        this.commentId = commentId;
        return this;
    }
}