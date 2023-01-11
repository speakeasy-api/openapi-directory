package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PayeeLocationResponseData {
    @JsonProperty("payee_location")
    public PayeeLocation payeeLocation;
    public PayeeLocationResponseData withPayeeLocation(PayeeLocation payeeLocation) {
        this.payeeLocation = payeeLocation;
        return this;
    }
}