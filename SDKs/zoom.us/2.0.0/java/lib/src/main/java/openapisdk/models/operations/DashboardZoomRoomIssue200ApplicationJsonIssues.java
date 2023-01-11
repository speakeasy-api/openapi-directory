package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DashboardZoomRoomIssue200ApplicationJsonIssues {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue_name")
    public String issueName;
    public DashboardZoomRoomIssue200ApplicationJsonIssues withIssueName(String issueName) {
        this.issueName = issueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zoom_rooms_count")
    public Long zoomRoomsCount;
    public DashboardZoomRoomIssue200ApplicationJsonIssues withZoomRoomsCount(Long zoomRoomsCount) {
        this.zoomRoomsCount = zoomRoomsCount;
        return this;
    }
}