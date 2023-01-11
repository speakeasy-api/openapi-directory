package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoSpatial
 * 360 spatial data.
**/
public class VideoSpatial {
    @JsonProperty("director_timeline")
    public VideoSpatialDirectorTimeline[] directorTimeline;
    public VideoSpatial withDirectorTimeline(VideoSpatialDirectorTimeline[] directorTimeline) {
        this.directorTimeline = directorTimeline;
        return this;
    }
    @JsonProperty("field_of_view")
    public Double fieldOfView;
    public VideoSpatial withFieldOfView(Double fieldOfView) {
        this.fieldOfView = fieldOfView;
        return this;
    }
    @JsonProperty("projection")
    public VideoSpatialProjectionEnum projection;
    public VideoSpatial withProjection(VideoSpatialProjectionEnum projection) {
        this.projection = projection;
        return this;
    }
    @JsonProperty("stereo_format")
    public VideoSpatialStereoFormatEnum stereoFormat;
    public VideoSpatial withStereoFormat(VideoSpatialStereoFormatEnum stereoFormat) {
        this.stereoFormat = stereoFormat;
        return this;
    }
}