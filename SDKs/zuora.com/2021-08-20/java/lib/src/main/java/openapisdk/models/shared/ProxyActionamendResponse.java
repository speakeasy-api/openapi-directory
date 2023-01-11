package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProxyActionamendResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public AmendResult[] results;
    public ProxyActionamendResponse withResults(AmendResult[] results) {
        this.results = results;
        return this;
    }
}