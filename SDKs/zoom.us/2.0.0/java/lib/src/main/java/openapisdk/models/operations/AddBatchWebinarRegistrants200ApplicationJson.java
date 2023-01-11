package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddBatchWebinarRegistrants200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants")
    public AddBatchWebinarRegistrants200ApplicationJsonRegistrants[] registrants;
    public AddBatchWebinarRegistrants200ApplicationJson withRegistrants(AddBatchWebinarRegistrants200ApplicationJsonRegistrants[] registrants) {
        this.registrants = registrants;
        return this;
    }
}