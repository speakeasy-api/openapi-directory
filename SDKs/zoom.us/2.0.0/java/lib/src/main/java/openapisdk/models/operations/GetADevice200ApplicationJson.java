package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetADevice200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee")
    public GetADevice200ApplicationJsonAssignee assignee;
    public GetADevice200ApplicationJson withAssignee(GetADevice200ApplicationJsonAssignee assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_type")
    public String deviceType;
    public GetADevice200ApplicationJson withDeviceType(String deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public GetADevice200ApplicationJson withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetADevice200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_address")
    public String macAddress;
    public GetADevice200ApplicationJson withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provision")
    public GetADevice200ApplicationJsonProvision provision;
    public GetADevice200ApplicationJson withProvision(GetADevice200ApplicationJsonProvision provision) {
        this.provision = provision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public GetADevice200ApplicationJsonSite site;
    public GetADevice200ApplicationJson withSite(GetADevice200ApplicationJsonSite site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetADevice200ApplicationJsonStatusEnum status;
    public GetADevice200ApplicationJson withStatus(GetADevice200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}