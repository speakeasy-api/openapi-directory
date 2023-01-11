package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProxyActionqueryRequestConf {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchSize")
    public Long batchSize;
    public ProxyActionqueryRequestConf withBatchSize(Long batchSize) {
        this.batchSize = batchSize;
        return this;
    }
}