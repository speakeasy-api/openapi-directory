package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoSpatial
 * 360 spatial data.
**/
public class OnDemandPageVideoSpatial {
    @JsonProperty("director_timeline")
    public OnDemandPageVideoSpatialDirectorTimeline[] directorTimeline;
    public OnDemandPageVideoSpatial withDirectorTimeline(OnDemandPageVideoSpatialDirectorTimeline[] directorTimeline) {
        this.directorTimeline = directorTimeline;
        return this;
    }
    @JsonProperty("field_of_view")
    public Double fieldOfView;
    public OnDemandPageVideoSpatial withFieldOfView(Double fieldOfView) {
        this.fieldOfView = fieldOfView;
        return this;
    }
    @JsonProperty("projection")
    public OnDemandPageVideoSpatialProjectionEnum projection;
    public OnDemandPageVideoSpatial withProjection(OnDemandPageVideoSpatialProjectionEnum projection) {
        this.projection = projection;
        return this;
    }
    @JsonProperty("stereo_format")
    public OnDemandPageVideoSpatialStereoFormatEnum stereoFormat;
    public OnDemandPageVideoSpatial withStereoFormat(OnDemandPageVideoSpatialStereoFormatEnum stereoFormat) {
        this.stereoFormat = stereoFormat;
        return this;
    }
}