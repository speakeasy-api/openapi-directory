package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProxyActiondeleteRequest {
    @JsonProperty("ids")
    public String[] ids;
    public ProxyActiondeleteRequest withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ProxyActiondeleteRequest withType(String type) {
        this.type = type;
        return this;
    }
}