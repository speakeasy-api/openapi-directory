package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc
 * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
**/
public class DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avg_loss")
    public String avgLoss;
    public DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc withAvgLoss(String avgLoss) {
        this.avgLoss = avgLoss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrate")
    public String bitrate;
    public DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc withBitrate(String bitrate) {
        this.bitrate = bitrate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jitter")
    public String jitter;
    public DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc withJitter(String jitter) {
        this.jitter = jitter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latency")
    public String latency;
    public DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc withLatency(String latency) {
        this.latency = latency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_loss")
    public String maxLoss;
    public DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc withMaxLoss(String maxLoss) {
        this.maxLoss = maxLoss;
        return this;
    }
}