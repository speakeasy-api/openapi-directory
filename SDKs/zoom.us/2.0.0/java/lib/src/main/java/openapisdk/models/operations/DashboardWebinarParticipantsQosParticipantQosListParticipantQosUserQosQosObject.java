package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject
 * Quality of Service object.
**/
public class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avg_loss")
    public String avgLoss;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject withAvgLoss(String avgLoss) {
        this.avgLoss = avgLoss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrate")
    public String bitrate;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject withBitrate(String bitrate) {
        this.bitrate = bitrate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frame_rate")
    public String frameRate;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject withFrameRate(String frameRate) {
        this.frameRate = frameRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jitter")
    public String jitter;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject withJitter(String jitter) {
        this.jitter = jitter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latency")
    public String latency;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject withLatency(String latency) {
        this.latency = latency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_loss")
    public String maxLoss;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject withMaxLoss(String maxLoss) {
        this.maxLoss = maxLoss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolution")
    public String resolution;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject withResolution(String resolution) {
        this.resolution = resolution;
        return this;
    }
}