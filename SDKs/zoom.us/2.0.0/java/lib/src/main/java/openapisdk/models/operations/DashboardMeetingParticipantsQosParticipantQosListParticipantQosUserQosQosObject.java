package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject
 * Quality of Service object.
**/
public class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avg_loss")
    public String avgLoss;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject withAvgLoss(String avgLoss) {
        this.avgLoss = avgLoss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrate")
    public String bitrate;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject withBitrate(String bitrate) {
        this.bitrate = bitrate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frame_rate")
    public String frameRate;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject withFrameRate(String frameRate) {
        this.frameRate = frameRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jitter")
    public String jitter;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject withJitter(String jitter) {
        this.jitter = jitter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latency")
    public String latency;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject withLatency(String latency) {
        this.latency = latency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_loss")
    public String maxLoss;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject withMaxLoss(String maxLoss) {
        this.maxLoss = maxLoss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolution")
    public String resolution;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject withResolution(String resolution) {
        this.resolution = resolution;
        return this;
    }
}