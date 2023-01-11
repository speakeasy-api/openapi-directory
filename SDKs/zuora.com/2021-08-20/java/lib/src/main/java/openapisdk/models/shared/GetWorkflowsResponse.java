package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWorkflowsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Workflow[] data;
    public GetWorkflowsResponse withData(Workflow[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public GetWorkflowsResponsePagination pagination;
    public GetWorkflowsResponse withPagination(GetWorkflowsResponsePagination pagination) {
        this.pagination = pagination;
        return this;
    }
}