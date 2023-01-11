package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EndUserRoute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("block_caller_id")
    public Boolean blockCallerId;
    public EndUserRoute withBlockCallerId(Boolean blockCallerId) {
        this.blockCallerId = blockCallerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_id")
    public String callerId;
    public EndUserRoute withCallerId(String callerId) {
        this.callerId = callerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dids")
    public Did[] dids;
    public EndUserRoute withDids(Did[] dids) {
        this.dids = dids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnd_enabled")
    public Boolean dndEnabled;
    public EndUserRoute withDndEnabled(Boolean dndEnabled) {
        this.dndEnabled = dndEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_handsets")
    public Line[] extensionHandsets;
    public EndUserRoute withExtensionHandsets(Line[] extensionHandsets) {
        this.extensionHandsets = extensionHandsets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public String extensionNumber;
    public EndUserRoute withExtensionNumber(String extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_id")
    public Double locationId;
    public EndUserRoute withLocationId(Double locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public BasicUser user;
    public EndUserRoute withUser(BasicUser user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vtt_enabled")
    public Boolean vttEnabled;
    public EndUserRoute withVttEnabled(Boolean vttEnabled) {
        this.vttEnabled = vttEnabled;
        return this;
    }
}