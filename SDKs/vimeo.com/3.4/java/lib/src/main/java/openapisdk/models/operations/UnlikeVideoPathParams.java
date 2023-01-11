package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnlikeVideoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public UnlikeVideoPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public UnlikeVideoPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}