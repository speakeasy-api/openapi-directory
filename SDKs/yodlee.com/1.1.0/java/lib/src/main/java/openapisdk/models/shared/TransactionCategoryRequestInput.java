package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransactionCategoryRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryName")
    public String categoryName;
    public TransactionCategoryRequestInput withCategoryName(String categoryName) {
        this.categoryName = categoryName;
        return this;
    }
    @JsonProperty("parentCategoryId")
    public Integer parentCategoryId;
    public TransactionCategoryRequestInput withParentCategoryId(Integer parentCategoryId) {
        this.parentCategoryId = parentCategoryId;
        return this;
    }
}