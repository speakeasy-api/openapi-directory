package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LastHref
 * URL to the last page of records
**/
public class LastHref {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public LastHref withHref(String href) {
        this.href = href;
        return this;
    }
}