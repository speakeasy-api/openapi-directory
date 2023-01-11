package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutVerifyPaymentMethodType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public PutVerifyPaymentMethodType withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayOptions")
    public PutVerifyPaymentMethodTypeGatewayOptions gatewayOptions;
    public PutVerifyPaymentMethodType withGatewayOptions(PutVerifyPaymentMethodTypeGatewayOptions gatewayOptions) {
        this.gatewayOptions = gatewayOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentGatewayName")
    public String paymentGatewayName;
    public PutVerifyPaymentMethodType withPaymentGatewayName(String paymentGatewayName) {
        this.paymentGatewayName = paymentGatewayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityCode")
    public String securityCode;
    public PutVerifyPaymentMethodType withSecurityCode(String securityCode) {
        this.securityCode = securityCode;
        return this;
    }
}