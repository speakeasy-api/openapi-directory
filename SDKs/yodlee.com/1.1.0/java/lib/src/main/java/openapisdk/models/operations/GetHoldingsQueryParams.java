package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHoldingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountId")
    public String accountId;
    public GetHoldingsQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assetClassification.classificationType")
    public String assetClassificationClassificationType;
    public GetHoldingsQueryParams withAssetClassificationClassificationType(String assetClassificationClassificationType) {
        this.assetClassificationClassificationType = assetClassificationClassificationType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=classificationValue")
    public String classificationValue;
    public GetHoldingsQueryParams withClassificationValue(String classificationValue) {
        this.classificationValue = classificationValue;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetHoldingsQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=providerAccountId")
    public String providerAccountId;
    public GetHoldingsQueryParams withProviderAccountId(String providerAccountId) {
        this.providerAccountId = providerAccountId;
        return this;
    }
}