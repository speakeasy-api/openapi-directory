package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreatePhoneSiteMultipartFormDataShortExtension
 * Short extension of the phone site.
**/
public class CreatePhoneSiteMultipartFormDataShortExtension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Long length;
    public CreatePhoneSiteMultipartFormDataShortExtension withLength(Long length) {
        this.length = length;
        return this;
    }
}