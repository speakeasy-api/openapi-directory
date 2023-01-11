package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteDataQueryJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public DataQueryJobCancelled data;
    public DeleteDataQueryJobResponse withData(DataQueryJobCancelled data) {
        this.data = data;
        return this;
    }
}