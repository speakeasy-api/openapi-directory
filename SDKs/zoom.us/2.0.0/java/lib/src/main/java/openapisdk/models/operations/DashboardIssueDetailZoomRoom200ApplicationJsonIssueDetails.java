package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DashboardIssueDetailZoomRoom200ApplicationJsonIssueDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue")
    public String issue;
    public DashboardIssueDetailZoomRoom200ApplicationJsonIssueDetails withIssue(String issue) {
        this.issue = issue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("time")
    public OffsetDateTime time;
    public DashboardIssueDetailZoomRoom200ApplicationJsonIssueDetails withTime(OffsetDateTime time) {
        this.time = time;
        return this;
    }
}