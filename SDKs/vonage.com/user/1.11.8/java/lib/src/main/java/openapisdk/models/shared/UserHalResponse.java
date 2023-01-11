package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserHalResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public UserEmbeddedObject embedded;
    public UserHalResponse withEmbedded(UserEmbeddedObject embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public Links links;
    public UserHalResponse withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Double page;
    public UserHalResponse withPage(Double page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Double pageSize;
    public UserHalResponse withPageSize(Double pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_items")
    public Double totalItems;
    public UserHalResponse withTotalItems(Double totalItems) {
        this.totalItems = totalItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_pages")
    public Double totalPages;
    public UserHalResponse withTotalPages(Double totalPages) {
        this.totalPages = totalPages;
        return this;
    }
}