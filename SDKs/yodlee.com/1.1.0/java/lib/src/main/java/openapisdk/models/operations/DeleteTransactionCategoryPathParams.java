package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTransactionCategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=categoryId")
    public Long categoryId;
    public DeleteTransactionCategoryPathParams withCategoryId(Long categoryId) {
        this.categoryId = categoryId;
        return this;
    }
}