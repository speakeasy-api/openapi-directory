package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * TrackingfieldCreateTrackingField
 * Tracking Field
**/
public class TrackingfieldCreateTrackingField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
@SpeakeasyMetadata("multipartForm:name=field")
    public String field;
    public TrackingfieldCreateTrackingField withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommended_values")
@SpeakeasyMetadata("multipartForm:name=recommended_values,json")
    public String[] recommendedValues;
    public TrackingfieldCreateTrackingField withRecommendedValues(String[] recommendedValues) {
        this.recommendedValues = recommendedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
@SpeakeasyMetadata("multipartForm:name=required")
    public Boolean required;
    public TrackingfieldCreateTrackingField withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visible")
@SpeakeasyMetadata("multipartForm:name=visible")
    public Boolean visible;
    public TrackingfieldCreateTrackingField withVisible(Boolean visible) {
        this.visible = visible;
        return this;
    }
}