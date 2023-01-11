package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWebinarTemplates200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templates")
    public ListWebinarTemplates200ApplicationJsonTemplates[] templates;
    public ListWebinarTemplates200ApplicationJson withTemplates(ListWebinarTemplates200ApplicationJsonTemplates[] templates) {
        this.templates = templates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public ListWebinarTemplates200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}