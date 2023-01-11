package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirstHref
 * URL to the first page of records
**/
public class FirstHref {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public FirstHref withHref(String href) {
        this.href = href;
        return this;
    }
}