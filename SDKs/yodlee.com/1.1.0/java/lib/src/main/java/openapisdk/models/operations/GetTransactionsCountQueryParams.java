package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionsCountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountId")
    public String accountId;
    public GetTransactionsCountQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=baseType")
    public String baseType;
    public GetTransactionsCountQueryParams withBaseType(String baseType) {
        this.baseType = baseType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=categoryId")
    public String categoryId;
    public GetTransactionsCountQueryParams withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=categoryType")
    public String categoryType;
    public GetTransactionsCountQueryParams withCategoryType(String categoryType) {
        this.categoryType = categoryType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=container")
    public String container;
    public GetTransactionsCountQueryParams withContainer(String container) {
        this.container = container;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=detailCategoryId")
    public String detailCategoryId;
    public GetTransactionsCountQueryParams withDetailCategoryId(String detailCategoryId) {
        this.detailCategoryId = detailCategoryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromDate")
    public String fromDate;
    public GetTransactionsCountQueryParams withFromDate(String fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=highLevelCategoryId")
    public String highLevelCategoryId;
    public GetTransactionsCountQueryParams withHighLevelCategoryId(String highLevelCategoryId) {
        this.highLevelCategoryId = highLevelCategoryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyword")
    public String keyword;
    public GetTransactionsCountQueryParams withKeyword(String keyword) {
        this.keyword = keyword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toDate")
    public String toDate;
    public GetTransactionsCountQueryParams withToDate(String toDate) {
        this.toDate = toDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public GetTransactionsCountQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}