package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveVideoFromProjectAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Double projectId;
    public RemoveVideoFromProjectAlt1PathParams withProjectId(Double projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public RemoveVideoFromProjectAlt1PathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}