package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc
 * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
**/
public class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avg_loss")
    public String avgLoss;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc withAvgLoss(String avgLoss) {
        this.avgLoss = avgLoss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrate")
    public String bitrate;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc withBitrate(String bitrate) {
        this.bitrate = bitrate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jitter")
    public String jitter;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc withJitter(String jitter) {
        this.jitter = jitter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latency")
    public String latency;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc withLatency(String latency) {
        this.latency = latency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_loss")
    public String maxLoss;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc withMaxLoss(String maxLoss) {
        this.maxLoss = maxLoss;
        return this;
    }
}