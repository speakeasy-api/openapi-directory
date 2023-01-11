package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DashboardWebinarParticipantQosParticipantQosUserQosQosObject
 * Quality of Service object.
**/
public class DashboardWebinarParticipantQosParticipantQosUserQosQosObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avg_loss")
    public String avgLoss;
    public DashboardWebinarParticipantQosParticipantQosUserQosQosObject withAvgLoss(String avgLoss) {
        this.avgLoss = avgLoss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrate")
    public String bitrate;
    public DashboardWebinarParticipantQosParticipantQosUserQosQosObject withBitrate(String bitrate) {
        this.bitrate = bitrate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frame_rate")
    public String frameRate;
    public DashboardWebinarParticipantQosParticipantQosUserQosQosObject withFrameRate(String frameRate) {
        this.frameRate = frameRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jitter")
    public String jitter;
    public DashboardWebinarParticipantQosParticipantQosUserQosQosObject withJitter(String jitter) {
        this.jitter = jitter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latency")
    public String latency;
    public DashboardWebinarParticipantQosParticipantQosUserQosQosObject withLatency(String latency) {
        this.latency = latency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_loss")
    public String maxLoss;
    public DashboardWebinarParticipantQosParticipantQosUserQosQosObject withMaxLoss(String maxLoss) {
        this.maxLoss = maxLoss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolution")
    public String resolution;
    public DashboardWebinarParticipantQosParticipantQosUserQosQosObject withResolution(String resolution) {
        this.resolution = resolution;
        return this;
    }
}