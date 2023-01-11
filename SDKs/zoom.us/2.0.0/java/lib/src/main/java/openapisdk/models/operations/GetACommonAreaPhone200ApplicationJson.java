package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetACommonAreaPhone200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_type")
    public String deviceType;
    public GetACommonAreaPhone200ApplicationJson withDeviceType(String deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetACommonAreaPhone200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_address")
    public String macAddress;
    public GetACommonAreaPhone200ApplicationJson withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetACommonAreaPhone200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provision")
    public GetACommonAreaPhone200ApplicationJsonProvision provision;
    public GetACommonAreaPhone200ApplicationJson withProvision(GetACommonAreaPhone200ApplicationJsonProvision provision) {
        this.provision = provision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public GetACommonAreaPhone200ApplicationJsonSite site;
    public GetACommonAreaPhone200ApplicationJson withSite(GetACommonAreaPhone200ApplicationJsonSite site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetACommonAreaPhone200ApplicationJson withStatus(String status) {
        this.status = status;
        return this;
    }
}