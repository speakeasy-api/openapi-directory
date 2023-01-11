package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnDemandPageVideoSpatialDirectorTimeline {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pitch")
    public Double pitch;
    public OnDemandPageVideoSpatialDirectorTimeline withPitch(Double pitch) {
        this.pitch = pitch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roll")
    public Double roll;
    public OnDemandPageVideoSpatialDirectorTimeline withRoll(Double roll) {
        this.roll = roll;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_code")
    public Double timeCode;
    public OnDemandPageVideoSpatialDirectorTimeline withTimeCode(Double timeCode) {
        this.timeCode = timeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yaw")
    public Double yaw;
    public OnDemandPageVideoSpatialDirectorTimeline withYaw(Double yaw) {
        this.yaw = yaw;
        return this;
    }
}