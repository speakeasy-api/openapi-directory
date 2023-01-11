package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VideoSpatialDirectorTimeline {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pitch")
    public Double pitch;
    public VideoSpatialDirectorTimeline withPitch(Double pitch) {
        this.pitch = pitch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roll")
    public Double roll;
    public VideoSpatialDirectorTimeline withRoll(Double roll) {
        this.roll = roll;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_code")
    public Double timeCode;
    public VideoSpatialDirectorTimeline withTimeCode(Double timeCode) {
        this.timeCode = timeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yaw")
    public Double yaw;
    public VideoSpatialDirectorTimeline withYaw(Double yaw) {
        this.yaw = yaw;
        return this;
    }
}