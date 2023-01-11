package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProxyActionexecuteRequest {
    @JsonProperty("ids")
    public String[] ids;
    public ProxyActionexecuteRequest withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonProperty("synchronous")
    public Boolean synchronous;
    public ProxyActionexecuteRequest withSynchronous(Boolean synchronous) {
        this.synchronous = synchronous;
        return this;
    }
    @JsonProperty("type")
    public ProxyActionexecuteRequestTypeEnum type;
    public ProxyActionexecuteRequest withType(ProxyActionexecuteRequestTypeEnum type) {
        this.type = type;
        return this;
    }
}