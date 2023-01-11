package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc
 * QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
**/
public class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avg_loss")
    public String avgLoss;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc withAvgLoss(String avgLoss) {
        this.avgLoss = avgLoss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrate")
    public String bitrate;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc withBitrate(String bitrate) {
        this.bitrate = bitrate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jitter")
    public String jitter;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc withJitter(String jitter) {
        this.jitter = jitter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latency")
    public String latency;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc withLatency(String latency) {
        this.latency = latency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_loss")
    public String maxLoss;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc withMaxLoss(String maxLoss) {
        this.maxLoss = maxLoss;
        return this;
    }
}