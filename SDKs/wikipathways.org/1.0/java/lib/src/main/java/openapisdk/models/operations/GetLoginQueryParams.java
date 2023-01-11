package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLoginQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetLoginFormatEnum format;
    public GetLoginQueryParams withFormat(GetLoginFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetLoginQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pass")
    public String pass;
    public GetLoginQueryParams withPass(String pass) {
        this.pass = pass;
        return this;
    }
}