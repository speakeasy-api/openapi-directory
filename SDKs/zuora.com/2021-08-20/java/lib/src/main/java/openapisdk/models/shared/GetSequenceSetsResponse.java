package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSequenceSetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequenceSets")
    public GetSequenceSetResponse[] sequenceSets;
    public GetSequenceSetsResponse withSequenceSets(GetSequenceSetResponse[] sequenceSets) {
        this.sequenceSets = sequenceSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetSequenceSetsResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}