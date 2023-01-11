package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DashboardIssueZoomRoom200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public LocalDate from;
    public DashboardIssueZoomRoom200ApplicationJson withFrom(LocalDate from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public LocalDate to;
    public DashboardIssueZoomRoom200ApplicationJson withTo(LocalDate to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public DashboardIssueZoomRoom200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zoom_rooms")
    public Object[] zoomRooms;
    public DashboardIssueZoomRoom200ApplicationJson withZoomRooms(Object[] zoomRooms) {
        this.zoomRooms = zoomRooms;
        return this;
    }
}