package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TasksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Task[] data;
    public TasksResponse withData(Task[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public TasksResponsePagination pagination;
    public TasksResponse withPagination(TasksResponsePagination pagination) {
        this.pagination = pagination;
        return this;
    }
}