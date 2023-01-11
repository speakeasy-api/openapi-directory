package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarRegistrantGetWebianrRegistrantCustomQuestions
 * Custom Question.
**/
public class WebinarRegistrantGetWebianrRegistrantCustomQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public WebinarRegistrantGetWebianrRegistrantCustomQuestions withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public WebinarRegistrantGetWebianrRegistrantCustomQuestions withValue(String value) {
        this.value = value;
        return this;
    }
}