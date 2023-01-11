package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateTransactionInput {
    @JsonProperty("categoryId")
    public Long categoryId;
    public UpdateTransactionInput withCategoryId(Long categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonProperty("categorySource")
    public UpdateTransactionCategorySourceEnum categorySource;
    public UpdateTransactionInput withCategorySource(UpdateTransactionCategorySourceEnum categorySource) {
        this.categorySource = categorySource;
        return this;
    }
    @JsonProperty("container")
    public UpdateTransactionContainerEnum container;
    public UpdateTransactionInput withContainer(UpdateTransactionContainerEnum container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public DescriptionInput description;
    public UpdateTransactionInput withDescription(DescriptionInput description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo")
    public String memo;
    public UpdateTransactionInput withMemo(String memo) {
        this.memo = memo;
        return this;
    }
}