package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProxyActionupdateRequest {
    @JsonProperty("objects")
    public java.util.Map<String, Object>[] objects;
    public ProxyActionupdateRequest withObjects(java.util.Map<String, Object>[] objects) {
        this.objects = objects;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ProxyActionupdateRequest withType(String type) {
        this.type = type;
        return this;
    }
}