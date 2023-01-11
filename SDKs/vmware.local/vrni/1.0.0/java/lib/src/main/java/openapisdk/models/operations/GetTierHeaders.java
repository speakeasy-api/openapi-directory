package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTierHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetTierHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}