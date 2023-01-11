package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCallQoS200ApplicationJsonCalleeQos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receiving")
    public GetCallQoS200ApplicationJsonCalleeQosReceiving[] receiving;
    public GetCallQoS200ApplicationJsonCalleeQos withReceiving(GetCallQoS200ApplicationJsonCalleeQosReceiving[] receiving) {
        this.receiving = receiving;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sending")
    public GetCallQoS200ApplicationJsonCalleeQosSending[] sending;
    public GetCallQoS200ApplicationJsonCalleeQos withSending(GetCallQoS200ApplicationJsonCalleeQosSending[] sending) {
        this.sending = sending;
        return this;
    }
}