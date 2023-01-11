package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutVerifyPaymentMethodTypeGatewayOptions
 * The field used to pass gateway-specific parameters and parameter values.
 * 
**/
public class PutVerifyPaymentMethodTypeGatewayOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public PutVerifyPaymentMethodTypeGatewayOptions withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public PutVerifyPaymentMethodTypeGatewayOptions withValue(String value) {
        this.value = value;
        return this;
    }
}