package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GraphError
 * Active Directory error information.
**/
public class GraphError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("odata.error")
    public OdataError odataError;
    public GraphError withOdataError(OdataError odataError) {
        this.odataError = odataError;
        return this;
    }
}