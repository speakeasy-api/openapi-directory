package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SuggestVideoCategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public SuggestVideoCategoryPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}