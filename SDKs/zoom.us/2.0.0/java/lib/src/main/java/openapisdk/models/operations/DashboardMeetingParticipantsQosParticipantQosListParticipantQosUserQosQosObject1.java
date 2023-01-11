package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1
 * Quality of Service object.
**/
public class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avg_loss")
    public String avgLoss;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 withAvgLoss(String avgLoss) {
        this.avgLoss = avgLoss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrate")
    public String bitrate;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 withBitrate(String bitrate) {
        this.bitrate = bitrate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jitter")
    public String jitter;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 withJitter(String jitter) {
        this.jitter = jitter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latency")
    public String latency;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 withLatency(String latency) {
        this.latency = latency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_loss")
    public String maxLoss;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 withMaxLoss(String maxLoss) {
        this.maxLoss = maxLoss;
        return this;
    }
}