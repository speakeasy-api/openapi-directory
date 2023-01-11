package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomObjectBulkJobResponseCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public CustomObjectBulkJobResponseCollection withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cursor")
    public String cursor;
    public CustomObjectBulkJobResponseCollection withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @JsonProperty("jobs")
    public CustomObjectBulkJobResponse[] jobs;
    public CustomObjectBulkJobResponseCollection withJobs(CustomObjectBulkJobResponse[] jobs) {
        this.jobs = jobs;
        return this;
    }
}