package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrackingfieldListTrackingFieldListTrackingField
 * Tracking Field
**/
public class TrackingfieldListTrackingFieldListTrackingField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public TrackingfieldListTrackingFieldListTrackingField withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public TrackingfieldListTrackingFieldListTrackingField withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommended_values")
    public String[] recommendedValues;
    public TrackingfieldListTrackingFieldListTrackingField withRecommendedValues(String[] recommendedValues) {
        this.recommendedValues = recommendedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public TrackingfieldListTrackingFieldListTrackingField withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visible")
    public Boolean visible;
    public TrackingfieldListTrackingFieldListTrackingField withVisible(Boolean visible) {
        this.visible = visible;
        return this;
    }
}