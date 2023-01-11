package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarRegistrantCreateMultipartFormDataCustomQuestions
 * Custom Question.
**/
public class WebinarRegistrantCreateMultipartFormDataCustomQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public WebinarRegistrantCreateMultipartFormDataCustomQuestions withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public WebinarRegistrantCreateMultipartFormDataCustomQuestions withValue(String value) {
        this.value = value;
        return this;
    }
}