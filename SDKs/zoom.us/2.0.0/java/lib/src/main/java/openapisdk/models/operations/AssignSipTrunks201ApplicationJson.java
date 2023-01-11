package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssignSipTrunks201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sip_trunks")
    public AssignSipTrunks201ApplicationJsonSipTrunks[] sipTrunks;
    public AssignSipTrunks201ApplicationJson withSipTrunks(AssignSipTrunks201ApplicationJsonSipTrunks[] sipTrunks) {
        this.sipTrunks = sipTrunks;
        return this;
    }
}