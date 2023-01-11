package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarRegistrantsRegistrationListRegistrantsCustomQuestions
 * Custom Question.
**/
public class WebinarRegistrantsRegistrationListRegistrantsCustomQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public WebinarRegistrantsRegistrationListRegistrantsCustomQuestions withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public WebinarRegistrantsRegistrationListRegistrantsCustomQuestions withValue(String value) {
        this.value = value;
        return this;
    }
}