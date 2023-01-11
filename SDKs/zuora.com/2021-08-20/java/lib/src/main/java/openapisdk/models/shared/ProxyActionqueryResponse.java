package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProxyActionqueryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("done")
    public Boolean done;
    public ProxyActionqueryResponse withDone(Boolean done) {
        this.done = done;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryLocator")
    public String queryLocator;
    public ProxyActionqueryResponse withQueryLocator(String queryLocator) {
        this.queryLocator = queryLocator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("records")
    public java.util.Map<String, Object>[] records;
    public ProxyActionqueryResponse withRecords(java.util.Map<String, Object>[] records) {
        this.records = records;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Integer size;
    public ProxyActionqueryResponse withSize(Integer size) {
        this.size = size;
        return this;
    }
}