package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardIssueDetailZoomRoomPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=zoomroomId")
    public String zoomroomId;
    public DashboardIssueDetailZoomRoomPathParams withZoomroomId(String zoomroomId) {
        this.zoomroomId = zoomroomId;
        return this;
    }
}