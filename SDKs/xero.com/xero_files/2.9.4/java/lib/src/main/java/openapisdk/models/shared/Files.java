package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Files {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public FileObject[] items;
    public Files withItems(FileObject[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Page")
    public Long page;
    public Files withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PerPage")
    public Long perPage;
    public Files withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalCount")
    public Long totalCount;
    public Files withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}