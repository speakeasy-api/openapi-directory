package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LikeVideoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public LikeVideoPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public LikeVideoPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}