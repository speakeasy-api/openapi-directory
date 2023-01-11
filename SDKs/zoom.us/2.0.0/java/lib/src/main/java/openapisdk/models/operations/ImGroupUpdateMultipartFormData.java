package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImGroupUpdateMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public ImGroupUpdateMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=search_by_account")
    public Boolean searchByAccount;
    public ImGroupUpdateMultipartFormData withSearchByAccount(Boolean searchByAccount) {
        this.searchByAccount = searchByAccount;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=search_by_domain")
    public Boolean searchByDomain;
    public ImGroupUpdateMultipartFormData withSearchByDomain(Boolean searchByDomain) {
        this.searchByDomain = searchByDomain;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=search_by_ma_account")
    public Boolean searchByMaAccount;
    public ImGroupUpdateMultipartFormData withSearchByMaAccount(Boolean searchByMaAccount) {
        this.searchByMaAccount = searchByMaAccount;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public ImGroupUpdateMultipartFormDataTypeEnum type;
    public ImGroupUpdateMultipartFormData withType(ImGroupUpdateMultipartFormDataTypeEnum type) {
        this.type = type;
        return this;
    }
}