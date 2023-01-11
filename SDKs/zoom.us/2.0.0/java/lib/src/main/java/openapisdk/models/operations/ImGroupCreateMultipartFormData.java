package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImGroupCreateMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public ImGroupCreateMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=search_by_account")
    public Boolean searchByAccount;
    public ImGroupCreateMultipartFormData withSearchByAccount(Boolean searchByAccount) {
        this.searchByAccount = searchByAccount;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=search_by_domain")
    public Boolean searchByDomain;
    public ImGroupCreateMultipartFormData withSearchByDomain(Boolean searchByDomain) {
        this.searchByDomain = searchByDomain;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=search_by_ma_account")
    public Boolean searchByMaAccount;
    public ImGroupCreateMultipartFormData withSearchByMaAccount(Boolean searchByMaAccount) {
        this.searchByMaAccount = searchByMaAccount;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public ImGroupCreateMultipartFormDataTypeEnum type;
    public ImGroupCreateMultipartFormData withType(ImGroupCreateMultipartFormDataTypeEnum type) {
        this.type = type;
        return this;
    }
}