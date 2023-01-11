package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SubscribeRequestPaymentMethodGatewayOptionData
 *  Use this field to pass gateway options.
 * 
 * 
 * **Character limit**: 255
 * 
 * 
 * **Values**: GatewayOption 
**/
public class SubscribeRequestPaymentMethodGatewayOptionData {
    @JsonProperty("GatewayOption")
    public GatewayOption[] gatewayOption;
    public SubscribeRequestPaymentMethodGatewayOptionData withGatewayOption(GatewayOption[] gatewayOption) {
        this.gatewayOption = gatewayOption;
        return this;
    }
}