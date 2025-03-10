/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UserRoles {
    /**
     * Code for the role
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;

    public UserRoles withCode(String code) {
        this.code = code;
        return this;
    }
    
    /**
     * Name for the role
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public UserRoles withName(String name) {
        this.name = name;
        return this;
    }
    
    public UserRoles(){}
}
