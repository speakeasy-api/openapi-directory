package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProxyActionqueryRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conf")
    public ProxyActionqueryRequestConf conf;
    public ProxyActionqueryRequest withConf(ProxyActionqueryRequestConf conf) {
        this.conf = conf;
        return this;
    }
    @JsonProperty("queryString")
    public String queryString;
    public ProxyActionqueryRequest withQueryString(String queryString) {
        this.queryString = queryString;
        return this;
    }
}