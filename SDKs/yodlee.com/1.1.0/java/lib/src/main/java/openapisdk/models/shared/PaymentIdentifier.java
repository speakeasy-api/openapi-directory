package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PaymentIdentifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PaymentIdentifierTypeEnum type;
    public PaymentIdentifier withType(PaymentIdentifierTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public PaymentIdentifier withValue(String value) {
        this.value = value;
        return this;
    }
}