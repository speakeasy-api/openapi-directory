package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSequenceSetsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequenceSets")
    public PostSequenceSetRequest[] sequenceSets;
    public PostSequenceSetsRequest withSequenceSets(PostSequenceSetRequest[] sequenceSets) {
        this.sequenceSets = sequenceSets;
        return this;
    }
}