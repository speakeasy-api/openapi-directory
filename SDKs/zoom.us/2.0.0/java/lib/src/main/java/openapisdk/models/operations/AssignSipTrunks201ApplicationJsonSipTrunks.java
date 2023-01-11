package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssignSipTrunks201ApplicationJsonSipTrunks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnis")
    public String dnis;
    public AssignSipTrunks201ApplicationJsonSipTrunks withDnis(String dnis) {
        this.dnis = dnis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AssignSipTrunks201ApplicationJsonSipTrunks withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AssignSipTrunks201ApplicationJsonSipTrunks withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_prefix")
    public String numberPrefix;
    public AssignSipTrunks201ApplicationJsonSipTrunks withNumberPrefix(String numberPrefix) {
        this.numberPrefix = numberPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sip_server_address")
    public String sipServerAddress;
    public AssignSipTrunks201ApplicationJsonSipTrunks withSipServerAddress(String sipServerAddress) {
        this.sipServerAddress = sipServerAddress;
        return this;
    }
}