package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPhoneSipTrunkMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=sip_trunks,json")
    public PostPhoneSipTrunkMultipartFormDataSipTrunks[] sipTrunks;
    public PostPhoneSipTrunkMultipartFormData1 withSipTrunks(PostPhoneSipTrunkMultipartFormDataSipTrunks[] sipTrunks) {
        this.sipTrunks = sipTrunks;
        return this;
    }
}