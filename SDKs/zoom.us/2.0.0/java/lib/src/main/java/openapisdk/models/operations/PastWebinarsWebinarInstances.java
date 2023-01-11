package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PastWebinarsWebinarInstances
 * List of webinars.
**/
public class PastWebinarsWebinarInstances {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webinars")
    public PastWebinarsWebinarInstancesWebinars[] webinars;
    public PastWebinarsWebinarInstances withWebinars(PastWebinarsWebinarInstancesWebinars[] webinars) {
        this.webinars = webinars;
        return this;
    }
}