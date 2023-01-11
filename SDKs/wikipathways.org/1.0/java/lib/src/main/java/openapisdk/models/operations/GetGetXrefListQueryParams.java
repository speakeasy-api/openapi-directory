package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetXrefListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=code")
    public String code;
    public GetGetXrefListQueryParams withCode(String code) {
        this.code = code;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetGetXrefListFormatEnum format;
    public GetGetXrefListQueryParams withFormat(GetGetXrefListFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pwId")
    public String pwId;
    public GetGetXrefListQueryParams withPwId(String pwId) {
        this.pwId = pwId;
        return this;
    }
}