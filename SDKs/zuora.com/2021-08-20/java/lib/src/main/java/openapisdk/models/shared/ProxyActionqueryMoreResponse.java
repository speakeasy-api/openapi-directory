package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProxyActionqueryMoreResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("done")
    public Boolean done;
    public ProxyActionqueryMoreResponse withDone(Boolean done) {
        this.done = done;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryLocator")
    public String queryLocator;
    public ProxyActionqueryMoreResponse withQueryLocator(String queryLocator) {
        this.queryLocator = queryLocator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("records")
    public java.util.Map<String, Object>[] records;
    public ProxyActionqueryMoreResponse withRecords(java.util.Map<String, Object>[] records) {
        this.records = records;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Integer size;
    public ProxyActionqueryMoreResponse withSize(Integer size) {
        this.size = size;
        return this;
    }
}