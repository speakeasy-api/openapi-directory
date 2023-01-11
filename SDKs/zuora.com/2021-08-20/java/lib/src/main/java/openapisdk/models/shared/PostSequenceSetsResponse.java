package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSequenceSetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequenceSets")
    public GetSequenceSetResponse[] sequenceSets;
    public PostSequenceSetsResponse withSequenceSets(GetSequenceSetResponse[] sequenceSets) {
        this.sequenceSets = sequenceSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostSequenceSetsResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}