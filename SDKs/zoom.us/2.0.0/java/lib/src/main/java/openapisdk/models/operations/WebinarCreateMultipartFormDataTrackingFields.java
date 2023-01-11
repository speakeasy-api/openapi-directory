package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebinarCreateMultipartFormDataTrackingFields {
    @JsonProperty("field")
    public String field;
    public WebinarCreateMultipartFormDataTrackingFields withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public WebinarCreateMultipartFormDataTrackingFields withValue(String value) {
        this.value = value;
        return this;
    }
}