package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * TrackingfieldUpdateTrackingField
 * Tracking Field
**/
public class TrackingfieldUpdateTrackingField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
@SpeakeasyMetadata("multipartForm:name=field")
    public String field;
    public TrackingfieldUpdateTrackingField withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommended_values")
@SpeakeasyMetadata("multipartForm:name=recommended_values,json")
    public String[] recommendedValues;
    public TrackingfieldUpdateTrackingField withRecommendedValues(String[] recommendedValues) {
        this.recommendedValues = recommendedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
@SpeakeasyMetadata("multipartForm:name=required")
    public Boolean required;
    public TrackingfieldUpdateTrackingField withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visible")
@SpeakeasyMetadata("multipartForm:name=visible")
    public Boolean visible;
    public TrackingfieldUpdateTrackingField withVisible(Boolean visible) {
        this.visible = visible;
        return this;
    }
}