package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPotTransactionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public String from;
    public GetPotTransactionsQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_number")
    public String pageNumber;
    public GetPotTransactionsQueryParams withPageNumber(String pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public String pageSize;
    public GetPotTransactionsQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetPotTransactionsSortEnum sort;
    public GetPotTransactionsQueryParams withSort(GetPotTransactionsSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sub_transaction_type")
    public String subTransactionType;
    public GetPotTransactionsQueryParams withSubTransactionType(String subTransactionType) {
        this.subTransactionType = subTransactionType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public String to;
    public GetPotTransactionsQueryParams withTo(String to) {
        this.to = to;
        return this;
    }
}