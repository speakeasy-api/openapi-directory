package openapisdk.models.operations;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetCreditMemoItemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=amount")
    public Double amount;
    public GetCreditMemoItemsQueryParams withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appliedAmount")
    public Double appliedAmount;
    public GetCreditMemoItemsQueryParams withAppliedAmount(Double appliedAmount) {
        this.appliedAmount = appliedAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdById")
    public String createdById;
    public GetCreditMemoItemsQueryParams withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdDate")
    public OffsetDateTime createdDate;
    public GetCreditMemoItemsQueryParams withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetCreditMemoItemsQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetCreditMemoItemsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=refundAmount")
    public Double refundAmount;
    public GetCreditMemoItemsQueryParams withRefundAmount(Double refundAmount) {
        this.refundAmount = refundAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceEndDate")
    public LocalDate serviceEndDate;
    public GetCreditMemoItemsQueryParams withServiceEndDate(LocalDate serviceEndDate) {
        this.serviceEndDate = serviceEndDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceStartDate")
    public LocalDate serviceStartDate;
    public GetCreditMemoItemsQueryParams withServiceStartDate(LocalDate serviceStartDate) {
        this.serviceStartDate = serviceStartDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sku")
    public String sku;
    public GetCreditMemoItemsQueryParams withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skuName")
    public String skuName;
    public GetCreditMemoItemsQueryParams withSkuName(String skuName) {
        this.skuName = skuName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetCreditMemoItemsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceItemId")
    public String sourceItemId;
    public GetCreditMemoItemsQueryParams withSourceItemId(String sourceItemId) {
        this.sourceItemId = sourceItemId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subscriptionId")
    public String subscriptionId;
    public GetCreditMemoItemsQueryParams withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedById")
    public String updatedById;
    public GetCreditMemoItemsQueryParams withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedDate")
    public OffsetDateTime updatedDate;
    public GetCreditMemoItemsQueryParams withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}