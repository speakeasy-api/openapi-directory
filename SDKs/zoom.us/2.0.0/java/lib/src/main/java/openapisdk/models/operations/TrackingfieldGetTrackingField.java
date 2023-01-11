package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrackingfieldGetTrackingField
 * Tracking Field
**/
public class TrackingfieldGetTrackingField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public TrackingfieldGetTrackingField withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public TrackingfieldGetTrackingField withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommended_values")
    public String[] recommendedValues;
    public TrackingfieldGetTrackingField withRecommendedValues(String[] recommendedValues) {
        this.recommendedValues = recommendedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public TrackingfieldGetTrackingField withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visible")
    public Boolean visible;
    public TrackingfieldGetTrackingField withVisible(Boolean visible) {
        this.visible = visible;
        return this;
    }
}