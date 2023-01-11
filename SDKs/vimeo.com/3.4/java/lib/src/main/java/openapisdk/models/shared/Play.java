package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Play {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progressive")
    public PlayProgressive[] progressive;
    public Play withProgressive(PlayProgressive[] progressive) {
        this.progressive = progressive;
        return this;
    }
    @JsonProperty("status")
    public PlayStatusEnum status;
    public Play withStatus(PlayStatusEnum status) {
        this.status = status;
        return this;
    }
}