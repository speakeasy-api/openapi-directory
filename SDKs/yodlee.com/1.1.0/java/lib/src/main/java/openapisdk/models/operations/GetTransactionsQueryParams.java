package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountId")
    public String accountId;
    public GetTransactionsQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=baseType")
    public String baseType;
    public GetTransactionsQueryParams withBaseType(String baseType) {
        this.baseType = baseType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=categoryId")
    public String categoryId;
    public GetTransactionsQueryParams withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=categoryType")
    public String categoryType;
    public GetTransactionsQueryParams withCategoryType(String categoryType) {
        this.categoryType = categoryType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=container")
    public String container;
    public GetTransactionsQueryParams withContainer(String container) {
        this.container = container;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=detailCategoryId")
    public String detailCategoryId;
    public GetTransactionsQueryParams withDetailCategoryId(String detailCategoryId) {
        this.detailCategoryId = detailCategoryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromDate")
    public String fromDate;
    public GetTransactionsQueryParams withFromDate(String fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=highLevelCategoryId")
    public String highLevelCategoryId;
    public GetTransactionsQueryParams withHighLevelCategoryId(String highLevelCategoryId) {
        this.highLevelCategoryId = highLevelCategoryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyword")
    public String keyword;
    public GetTransactionsQueryParams withKeyword(String keyword) {
        this.keyword = keyword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Integer skip;
    public GetTransactionsQueryParams withSkip(Integer skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toDate")
    public String toDate;
    public GetTransactionsQueryParams withToDate(String toDate) {
        this.toDate = toDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=top")
    public Integer top;
    public GetTransactionsQueryParams withTop(Integer top) {
        this.top = top;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public GetTransactionsQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}