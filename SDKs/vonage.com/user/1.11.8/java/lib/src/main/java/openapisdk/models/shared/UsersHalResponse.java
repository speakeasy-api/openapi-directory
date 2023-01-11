package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UsersHalResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public UsersEmbeddedObject embedded;
    public UsersHalResponse withEmbedded(UsersEmbeddedObject embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public Links links;
    public UsersHalResponse withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Double page;
    public UsersHalResponse withPage(Double page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Double pageSize;
    public UsersHalResponse withPageSize(Double pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_items")
    public Double totalItems;
    public UsersHalResponse withTotalItems(Double totalItems) {
        this.totalItems = totalItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_pages")
    public Double totalPages;
    public UsersHalResponse withTotalPages(Double totalPages) {
        this.totalPages = totalPages;
        return this;
    }
}