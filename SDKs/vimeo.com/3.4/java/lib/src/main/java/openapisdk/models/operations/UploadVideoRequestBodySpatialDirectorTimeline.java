package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoRequestBodySpatialDirectorTimeline {
    @JsonProperty("pitch")
    public Double pitch;
    public UploadVideoRequestBodySpatialDirectorTimeline withPitch(Double pitch) {
        this.pitch = pitch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roll")
    public Double roll;
    public UploadVideoRequestBodySpatialDirectorTimeline withRoll(Double roll) {
        this.roll = roll;
        return this;
    }
    @JsonProperty("time_code")
    public Double timeCode;
    public UploadVideoRequestBodySpatialDirectorTimeline withTimeCode(Double timeCode) {
        this.timeCode = timeCode;
        return this;
    }
    @JsonProperty("yaw")
    public Double yaw;
    public UploadVideoRequestBodySpatialDirectorTimeline withYaw(Double yaw) {
        this.yaw = yaw;
        return this;
    }
}