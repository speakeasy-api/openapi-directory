package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc
 * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
**/
public class DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avg_loss")
    public String avgLoss;
    public DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc withAvgLoss(String avgLoss) {
        this.avgLoss = avgLoss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrate")
    public String bitrate;
    public DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc withBitrate(String bitrate) {
        this.bitrate = bitrate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jitter")
    public String jitter;
    public DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc withJitter(String jitter) {
        this.jitter = jitter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latency")
    public String latency;
    public DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc withLatency(String latency) {
        this.latency = latency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_loss")
    public String maxLoss;
    public DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc withMaxLoss(String maxLoss) {
        this.maxLoss = maxLoss;
        return this;
    }
}