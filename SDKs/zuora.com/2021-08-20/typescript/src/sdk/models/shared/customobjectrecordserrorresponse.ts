/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CustomObjectRecordsWithError } from "./customobjectrecordswitherror";
import { Expose, Type } from "class-transformer";

/**
 * Failed schema validation
 *
 * @remarks
 *
 * For the batch `update` action, the 400 response only returns when the `allowPartialSuccess` flag is set to `false` and the batch records have failed schema validation.
 *
 */
export class CustomObjectRecordsErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: number;

  @SpeakeasyMetadata({ elemType: CustomObjectRecordsWithError })
  @Expose({ name: "details" })
  @Type(() => CustomObjectRecordsWithError)
  details?: CustomObjectRecordsWithError[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}
