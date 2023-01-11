package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubmitDataQueryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public DataQueryJob data;
    public SubmitDataQueryResponse withData(DataQueryJob data) {
        this.data = data;
        return this;
    }
}