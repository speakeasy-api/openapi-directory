/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GETTaxationItemTypewithSuccess } from "./gettaxationitemtypewithsuccess";
import { Expose, Type } from "class-transformer";

export class GETTaxationItemListType extends SpeakeasyBase {
  /**
   * Returns `true` if the request was processed successfully.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "success" })
  success?: boolean;

  /**
   * Container for taxation items.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata({ elemType: GETTaxationItemTypewithSuccess })
  @Expose({ name: "taxationItems" })
  @Type(() => GETTaxationItemTypewithSuccess)
  taxationItems?: GETTaxationItemTypewithSuccess[];
}
