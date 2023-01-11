package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OptCapProgramInPrice200ApplicationJsonStatusInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subsidyEnrolled")
    public Boolean subsidyEnrolled;
    public OptCapProgramInPrice200ApplicationJsonStatusInfo withSubsidyEnrolled(Boolean subsidyEnrolled) {
        this.subsidyEnrolled = subsidyEnrolled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subsidyPreference")
    public Boolean subsidyPreference;
    public OptCapProgramInPrice200ApplicationJsonStatusInfo withSubsidyPreference(Boolean subsidyPreference) {
        this.subsidyPreference = subsidyPreference;
        return this;
    }
}