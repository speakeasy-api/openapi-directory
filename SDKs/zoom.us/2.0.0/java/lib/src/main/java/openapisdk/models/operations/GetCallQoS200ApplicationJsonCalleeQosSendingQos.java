package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCallQoS200ApplicationJsonCalleeQosSendingQos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avg_loss")
    public String avgLoss;
    public GetCallQoS200ApplicationJsonCalleeQosSendingQos withAvgLoss(String avgLoss) {
        this.avgLoss = avgLoss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrate")
    public String bitrate;
    public GetCallQoS200ApplicationJsonCalleeQosSendingQos withBitrate(String bitrate) {
        this.bitrate = bitrate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jitter")
    public String jitter;
    public GetCallQoS200ApplicationJsonCalleeQosSendingQos withJitter(String jitter) {
        this.jitter = jitter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_loss")
    public String maxLoss;
    public GetCallQoS200ApplicationJsonCalleeQosSendingQos withMaxLoss(String maxLoss) {
        this.maxLoss = maxLoss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mos")
    public String mos;
    public GetCallQoS200ApplicationJsonCalleeQosSendingQos withMos(String mos) {
        this.mos = mos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_delay")
    public String networkDelay;
    public GetCallQoS200ApplicationJsonCalleeQosSendingQos withNetworkDelay(String networkDelay) {
        this.networkDelay = networkDelay;
        return this;
    }
}