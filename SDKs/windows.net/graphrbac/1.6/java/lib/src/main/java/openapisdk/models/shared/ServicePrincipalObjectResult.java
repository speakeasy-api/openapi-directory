package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServicePrincipalObjectResult
 * Service Principal Object Result.
**/
public class ServicePrincipalObjectResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("odata.metadata")
    public String odataMetadata;
    public ServicePrincipalObjectResult withOdataMetadata(String odataMetadata) {
        this.odataMetadata = odataMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ServicePrincipalObjectResult withValue(String value) {
        this.value = value;
        return this;
    }
}