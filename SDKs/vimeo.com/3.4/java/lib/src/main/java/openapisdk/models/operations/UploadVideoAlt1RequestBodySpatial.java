package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoAlt1RequestBodySpatial {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("director_timeline")
    public UploadVideoAlt1RequestBodySpatialDirectorTimeline[] directorTimeline;
    public UploadVideoAlt1RequestBodySpatial withDirectorTimeline(UploadVideoAlt1RequestBodySpatialDirectorTimeline[] directorTimeline) {
        this.directorTimeline = directorTimeline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_of_view")
    public Double fieldOfView;
    public UploadVideoAlt1RequestBodySpatial withFieldOfView(Double fieldOfView) {
        this.fieldOfView = fieldOfView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projection")
    public UploadVideoAlt1RequestBodySpatialProjectionEnum projection;
    public UploadVideoAlt1RequestBodySpatial withProjection(UploadVideoAlt1RequestBodySpatialProjectionEnum projection) {
        this.projection = projection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stereo_format")
    public UploadVideoAlt1RequestBodySpatialStereoFormatEnum stereoFormat;
    public UploadVideoAlt1RequestBodySpatial withStereoFormat(UploadVideoAlt1RequestBodySpatialStereoFormatEnum stereoFormat) {
        this.stereoFormat = stereoFormat;
        return this;
    }
}