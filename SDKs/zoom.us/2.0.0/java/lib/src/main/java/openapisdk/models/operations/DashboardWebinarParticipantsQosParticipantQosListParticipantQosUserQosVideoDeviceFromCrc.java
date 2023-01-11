package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc
 * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
**/
public class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avg_loss")
    public String avgLoss;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc withAvgLoss(String avgLoss) {
        this.avgLoss = avgLoss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrate")
    public String bitrate;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc withBitrate(String bitrate) {
        this.bitrate = bitrate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jitter")
    public String jitter;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc withJitter(String jitter) {
        this.jitter = jitter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latency")
    public String latency;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc withLatency(String latency) {
        this.latency = latency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_loss")
    public String maxLoss;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc withMaxLoss(String maxLoss) {
        this.maxLoss = maxLoss;
        return this;
    }
}