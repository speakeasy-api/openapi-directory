package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutDocumentPropertiesType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFileName")
    public String customFileName;
    public PutDocumentPropertiesType withCustomFileName(String customFileName) {
        this.customFileName = customFileName;
        return this;
    }
}