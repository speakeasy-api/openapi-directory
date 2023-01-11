package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OptCapProgramInPrice200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("martId")
    public String martId;
    public OptCapProgramInPrice200ApplicationJson withMartId(String martId) {
        this.martId = martId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusInfo")
    public OptCapProgramInPrice200ApplicationJsonStatusInfo statusInfo;
    public OptCapProgramInPrice200ApplicationJson withStatusInfo(OptCapProgramInPrice200ApplicationJsonStatusInfo statusInfo) {
        this.statusInfo = statusInfo;
        return this;
    }
}