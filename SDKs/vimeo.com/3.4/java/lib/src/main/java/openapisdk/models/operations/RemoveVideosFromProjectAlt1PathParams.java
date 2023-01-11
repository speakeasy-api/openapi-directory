package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveVideosFromProjectAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Double projectId;
    public RemoveVideosFromProjectAlt1PathParams withProjectId(Double projectId) {
        this.projectId = projectId;
        return this;
    }
}