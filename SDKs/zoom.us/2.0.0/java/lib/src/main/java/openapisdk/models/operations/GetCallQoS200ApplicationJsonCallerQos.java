package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCallQoS200ApplicationJsonCallerQos
 * Quality of Service object that represents the call quality data of the caller.
**/
public class GetCallQoS200ApplicationJsonCallerQos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receiving")
    public GetCallQoS200ApplicationJsonCallerQosReceiving[] receiving;
    public GetCallQoS200ApplicationJsonCallerQos withReceiving(GetCallQoS200ApplicationJsonCallerQosReceiving[] receiving) {
        this.receiving = receiving;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sending")
    public GetCallQoS200ApplicationJsonCallerQosSending[] sending;
    public GetCallQoS200ApplicationJsonCallerQos withSending(GetCallQoS200ApplicationJsonCallerQosSending[] sending) {
        this.sending = sending;
        return this;
    }
}