package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DashboardWebinarParticipantQosParticipantQosUserQosQosObject1
 * Quality of Service object.
**/
public class DashboardWebinarParticipantQosParticipantQosUserQosQosObject1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avg_loss")
    public String avgLoss;
    public DashboardWebinarParticipantQosParticipantQosUserQosQosObject1 withAvgLoss(String avgLoss) {
        this.avgLoss = avgLoss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrate")
    public String bitrate;
    public DashboardWebinarParticipantQosParticipantQosUserQosQosObject1 withBitrate(String bitrate) {
        this.bitrate = bitrate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jitter")
    public String jitter;
    public DashboardWebinarParticipantQosParticipantQosUserQosQosObject1 withJitter(String jitter) {
        this.jitter = jitter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latency")
    public String latency;
    public DashboardWebinarParticipantQosParticipantQosUserQosQosObject1 withLatency(String latency) {
        this.latency = latency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_loss")
    public String maxLoss;
    public DashboardWebinarParticipantQosParticipantQosUserQosQosObject1 withMaxLoss(String maxLoss) {
        this.maxLoss = maxLoss;
        return this;
    }
}