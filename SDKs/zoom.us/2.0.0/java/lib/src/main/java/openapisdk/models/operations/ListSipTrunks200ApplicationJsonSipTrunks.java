package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSipTrunks200ApplicationJsonSipTrunks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnis")
    public String dnis;
    public ListSipTrunks200ApplicationJsonSipTrunks withDnis(String dnis) {
        this.dnis = dnis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListSipTrunks200ApplicationJsonSipTrunks withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListSipTrunks200ApplicationJsonSipTrunks withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_prefix")
    public String numberPrefix;
    public ListSipTrunks200ApplicationJsonSipTrunks withNumberPrefix(String numberPrefix) {
        this.numberPrefix = numberPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_caller_id")
    public String outboundCallerId;
    public ListSipTrunks200ApplicationJsonSipTrunks withOutboundCallerId(String outboundCallerId) {
        this.outboundCallerId = outboundCallerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sip_server_address")
    public String sipServerAddress;
    public ListSipTrunks200ApplicationJsonSipTrunks withSipServerAddress(String sipServerAddress) {
        this.sipServerAddress = sipServerAddress;
        return this;
    }
}