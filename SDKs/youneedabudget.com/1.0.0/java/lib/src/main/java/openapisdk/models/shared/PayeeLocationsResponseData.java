package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PayeeLocationsResponseData {
    @JsonProperty("payee_locations")
    public PayeeLocation[] payeeLocations;
    public PayeeLocationsResponseData withPayeeLocations(PayeeLocation[] payeeLocations) {
        this.payeeLocations = payeeLocations;
        return this;
    }
}