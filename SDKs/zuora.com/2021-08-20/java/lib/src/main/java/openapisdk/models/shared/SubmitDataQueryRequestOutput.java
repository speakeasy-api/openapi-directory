package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SubmitDataQueryRequestOutput
 * Additional information about the query results.
 * 
**/
public class SubmitDataQueryRequestOutput {
    @JsonProperty("target")
    public SubmitDataQueryRequestOutputTargetEnum target;
    public SubmitDataQueryRequestOutput withTarget(SubmitDataQueryRequestOutputTargetEnum target) {
        this.target = target;
        return this;
    }
}