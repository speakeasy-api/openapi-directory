package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardZoomRoomPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=zoomroomId")
    public String zoomroomId;
    public DashboardZoomRoomPathParams withZoomroomId(String zoomroomId) {
        this.zoomroomId = zoomroomId;
        return this;
    }
}