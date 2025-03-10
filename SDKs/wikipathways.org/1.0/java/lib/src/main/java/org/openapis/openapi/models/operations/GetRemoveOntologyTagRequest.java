/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetRemoveOntologyTagRequest {
    /**
     * The authentication key
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=auth")
    public String auth;

    public GetRemoveOntologyTagRequest withAuth(String auth) {
        this.auth = auth;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetRemoveOntologyTagFormatEnum format;

    public GetRemoveOntologyTagRequest withFormat(GetRemoveOntologyTagFormatEnum format) {
        this.format = format;
        return this;
    }
    
    /**
     * The pathway identifier
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pwId")
    public String pwId;

    public GetRemoveOntologyTagRequest withPwId(String pwId) {
        this.pwId = pwId;
        return this;
    }
    
    /**
     * The ontology term identifier in the ontology
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=termId")
    public String termId;

    public GetRemoveOntologyTagRequest withTermId(String termId) {
        this.termId = termId;
        return this;
    }
    
    /**
     * The username
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user")
    public String user;

    public GetRemoveOntologyTagRequest withUser(String user) {
        this.user = user;
        return this;
    }
    
    public GetRemoveOntologyTagRequest(@JsonProperty("auth") String auth, @JsonProperty("pwId") String pwId, @JsonProperty("termId") String termId, @JsonProperty("user") String user) {
        this.auth = auth;
        this.pwId = pwId;
        this.termId = termId;
        this.user = user;
  }
}
