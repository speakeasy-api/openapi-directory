package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProxyActionqueryMoreRequest {
    @JsonProperty("queryLocator")
    public String queryLocator;
    public ProxyActionqueryMoreRequest withQueryLocator(String queryLocator) {
        this.queryLocator = queryLocator;
        return this;
    }
}