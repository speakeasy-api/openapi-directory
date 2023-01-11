package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarRegistrantCreateApplicationJsonCustomQuestions
 * Custom Question.
**/
public class WebinarRegistrantCreateApplicationJsonCustomQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public WebinarRegistrantCreateApplicationJsonCustomQuestions withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public WebinarRegistrantCreateApplicationJsonCustomQuestions withValue(String value) {
        this.value = value;
        return this;
    }
}