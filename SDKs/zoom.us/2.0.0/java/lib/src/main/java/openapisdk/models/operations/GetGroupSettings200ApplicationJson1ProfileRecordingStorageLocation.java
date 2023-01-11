package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_values")
    public String[] allowedValues;
    public GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation withAllowedValues(String[] allowedValues) {
        this.allowedValues = allowedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation withValue(String value) {
        this.value = value;
        return this;
    }
}