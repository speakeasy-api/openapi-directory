package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebinarRegistrantStatusApplicationJson {
    @JsonProperty("action")
    public WebinarRegistrantStatusApplicationJsonActionEnum action;
    public WebinarRegistrantStatusApplicationJson withAction(WebinarRegistrantStatusApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants")
    public WebinarRegistrantStatusApplicationJsonRegistrants[] registrants;
    public WebinarRegistrantStatusApplicationJson withRegistrants(WebinarRegistrantStatusApplicationJsonRegistrants[] registrants) {
        this.registrants = registrants;
        return this;
    }
}