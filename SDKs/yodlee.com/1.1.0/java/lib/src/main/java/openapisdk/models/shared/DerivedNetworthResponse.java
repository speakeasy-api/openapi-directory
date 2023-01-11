package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DerivedNetworthResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networth")
    public DerivedNetworth[] networth;
    public DerivedNetworthResponse withNetworth(DerivedNetworth[] networth) {
        this.networth = networth;
        return this;
    }
}