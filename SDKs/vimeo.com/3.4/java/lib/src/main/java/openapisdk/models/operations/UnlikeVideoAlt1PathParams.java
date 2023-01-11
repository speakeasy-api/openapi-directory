package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnlikeVideoAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public UnlikeVideoAlt1PathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}