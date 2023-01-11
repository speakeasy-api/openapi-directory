package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostPaymentMethodResponseReasons
 * Error information. Only applicable if the payment method was not created.
 * 
**/
public class PostPaymentMethodResponseReasons {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public PostPaymentMethodResponseReasons withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public PostPaymentMethodResponseReasons withMessage(String message) {
        this.message = message;
        return this;
    }
}