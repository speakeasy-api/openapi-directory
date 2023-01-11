package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Domain {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain_type")
    public DomainDomainTypeEnum domainType;
    public Domain withDomainType(DomainDomainTypeEnum domainType) {
        this.domainType = domainType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Domain withValue(String value) {
        this.value = value;
        return this;
    }
}