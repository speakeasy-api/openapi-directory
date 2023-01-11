package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProxyActionsubscribeRequest {
    @JsonProperty("subscribes")
    public SubscribeRequest[] subscribes;
    public ProxyActionsubscribeRequest withSubscribes(SubscribeRequest[] subscribes) {
        this.subscribes = subscribes;
        return this;
    }
}