package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoRequestBodySpatial {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("director_timeline")
    public UploadVideoRequestBodySpatialDirectorTimeline[] directorTimeline;
    public UploadVideoRequestBodySpatial withDirectorTimeline(UploadVideoRequestBodySpatialDirectorTimeline[] directorTimeline) {
        this.directorTimeline = directorTimeline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_of_view")
    public Double fieldOfView;
    public UploadVideoRequestBodySpatial withFieldOfView(Double fieldOfView) {
        this.fieldOfView = fieldOfView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projection")
    public UploadVideoRequestBodySpatialProjectionEnum projection;
    public UploadVideoRequestBodySpatial withProjection(UploadVideoRequestBodySpatialProjectionEnum projection) {
        this.projection = projection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stereo_format")
    public UploadVideoRequestBodySpatialStereoFormatEnum stereoFormat;
    public UploadVideoRequestBodySpatial withStereoFormat(UploadVideoRequestBodySpatialStereoFormatEnum stereoFormat) {
        this.stereoFormat = stereoFormat;
        return this;
    }
}