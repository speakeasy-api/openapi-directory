/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Indicates if consent was provided by the administrator (on behalf of the organization) or by an individual.
 */
export enum OAuth2PermissionGrantConsentTypeEnum {
  AllPrincipals = "AllPrincipals",
  Principal = "Principal",
}

/**
 * The relevant app Service Principal Object Id and the Service Principal Object Id you want to grant.
 */
export class OAuth2PermissionGrant extends SpeakeasyBase {
  /**
   * The id of the resource's service principal granted consent to impersonate the user when accessing the resource (represented by the resourceId property).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "clientId" })
  clientId?: string;

  /**
   * Indicates if consent was provided by the administrator (on behalf of the organization) or by an individual.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "consentType" })
  consentType?: OAuth2PermissionGrantConsentTypeEnum;

  /**
   * Expiry time for TTL
   */
  @SpeakeasyMetadata()
  @Expose({ name: "expiryTime" })
  expiryTime?: string;

  /**
   * The id of the permission grant
   */
  @SpeakeasyMetadata()
  @Expose({ name: "objectId" })
  objectId?: string;

  /**
   * Microsoft.DirectoryServices.OAuth2PermissionGrant
   */
  @SpeakeasyMetadata()
  @Expose({ name: "odata.type" })
  odataType?: string;

  /**
   * When consent type is Principal, this property specifies the id of the user that granted consent and applies only for that user.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "principalId" })
  principalId?: string;

  /**
   * Object Id of the resource you want to grant
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resourceId" })
  resourceId?: string;

  /**
   * Specifies the value of the scope claim that the resource application should expect in the OAuth 2.0 access token. For example, User.Read
   */
  @SpeakeasyMetadata()
  @Expose({ name: "scope" })
  scope?: string;

  /**
   * Start time for TTL
   */
  @SpeakeasyMetadata()
  @Expose({ name: "startTime" })
  startTime?: string;
}
