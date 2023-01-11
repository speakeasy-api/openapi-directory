package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DataExtractsEventLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public DataExtractsEventLinks withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("methodType")
    public String methodType;
    public DataExtractsEventLinks withMethodType(String methodType) {
        this.methodType = methodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rel")
    public String rel;
    public DataExtractsEventLinks withRel(String rel) {
        this.rel = rel;
        return this;
    }
}