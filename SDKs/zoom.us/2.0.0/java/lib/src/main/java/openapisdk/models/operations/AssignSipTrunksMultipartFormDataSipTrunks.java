package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssignSipTrunksMultipartFormDataSipTrunks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnis")
    public String dnis;
    public AssignSipTrunksMultipartFormDataSipTrunks withDnis(String dnis) {
        this.dnis = dnis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AssignSipTrunksMultipartFormDataSipTrunks withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_caller_id")
    public String outboundCallerId;
    public AssignSipTrunksMultipartFormDataSipTrunks withOutboundCallerId(String outboundCallerId) {
        this.outboundCallerId = outboundCallerId;
        return this;
    }
}