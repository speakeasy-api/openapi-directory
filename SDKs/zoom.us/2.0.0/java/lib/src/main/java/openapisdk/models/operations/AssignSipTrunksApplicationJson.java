package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssignSipTrunksApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sip_trunks")
    public AssignSipTrunksApplicationJsonSipTrunks[] sipTrunks;
    public AssignSipTrunksApplicationJson withSipTrunks(AssignSipTrunksApplicationJsonSipTrunks[] sipTrunks) {
        this.sipTrunks = sipTrunks;
        return this;
    }
}