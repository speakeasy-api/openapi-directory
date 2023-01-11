package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutTasksRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public UpdateTask[] data;
    public PutTasksRequest withData(UpdateTask[] data) {
        this.data = data;
        return this;
    }
}