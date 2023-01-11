package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrackingfieldCreateTrackingField1
 * Tracking Field
**/
public class TrackingfieldCreateTrackingField1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public TrackingfieldCreateTrackingField1 withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public TrackingfieldCreateTrackingField1 withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommended_values")
    public String[] recommendedValues;
    public TrackingfieldCreateTrackingField1 withRecommendedValues(String[] recommendedValues) {
        this.recommendedValues = recommendedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public TrackingfieldCreateTrackingField1 withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visible")
    public Boolean visible;
    public TrackingfieldCreateTrackingField1 withVisible(Boolean visible) {
        this.visible = visible;
        return this;
    }
}