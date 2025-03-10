/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostAdminMappingsRequestBodyRequestBasicAuthCredentials - Pre-emptive basic auth credentials to match against
 */
public class PostAdminMappingsRequestBodyRequestBasicAuthCredentials {
    @JsonProperty("password")
    public String password;

    public PostAdminMappingsRequestBodyRequestBasicAuthCredentials withPassword(String password) {
        this.password = password;
        return this;
    }
    
    @JsonProperty("username")
    public String username;

    public PostAdminMappingsRequestBodyRequestBasicAuthCredentials withUsername(String username) {
        this.username = username;
        return this;
    }
    
    public PostAdminMappingsRequestBodyRequestBasicAuthCredentials(@JsonProperty("username") String username, @JsonProperty("password") String password) {
        this.username = username;
        this.password = password;
  }
}
