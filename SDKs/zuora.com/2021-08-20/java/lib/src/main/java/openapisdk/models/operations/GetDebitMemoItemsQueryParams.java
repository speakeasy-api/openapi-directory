package openapisdk.models.operations;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetDebitMemoItemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=amount")
    public Double amount;
    public GetDebitMemoItemsQueryParams withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=beAppliedAmount")
    public Double beAppliedAmount;
    public GetDebitMemoItemsQueryParams withBeAppliedAmount(Double beAppliedAmount) {
        this.beAppliedAmount = beAppliedAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdById")
    public String createdById;
    public GetDebitMemoItemsQueryParams withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdDate")
    public OffsetDateTime createdDate;
    public GetDebitMemoItemsQueryParams withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetDebitMemoItemsQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetDebitMemoItemsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceEndDate")
    public LocalDate serviceEndDate;
    public GetDebitMemoItemsQueryParams withServiceEndDate(LocalDate serviceEndDate) {
        this.serviceEndDate = serviceEndDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceStartDate")
    public LocalDate serviceStartDate;
    public GetDebitMemoItemsQueryParams withServiceStartDate(LocalDate serviceStartDate) {
        this.serviceStartDate = serviceStartDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sku")
    public String sku;
    public GetDebitMemoItemsQueryParams withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skuName")
    public String skuName;
    public GetDebitMemoItemsQueryParams withSkuName(String skuName) {
        this.skuName = skuName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetDebitMemoItemsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceItemId")
    public String sourceItemId;
    public GetDebitMemoItemsQueryParams withSourceItemId(String sourceItemId) {
        this.sourceItemId = sourceItemId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subscriptionId")
    public String subscriptionId;
    public GetDebitMemoItemsQueryParams withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedById")
    public String updatedById;
    public GetDebitMemoItemsQueryParams withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedDate")
    public OffsetDateTime updatedDate;
    public GetDebitMemoItemsQueryParams withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}