package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePresenceStatusApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public UpdatePresenceStatusApplicationJson withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public UpdatePresenceStatusApplicationJsonStatusEnum status;
    public UpdatePresenceStatusApplicationJson withStatus(UpdatePresenceStatusApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}