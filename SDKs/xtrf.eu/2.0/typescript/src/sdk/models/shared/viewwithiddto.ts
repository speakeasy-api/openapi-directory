/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ColumnDTO } from "./columndto";
import { OrderDTO } from "./orderdto";
import { PermissionsDTO } from "./permissionsdto";
import { SettingsDTO } from "./settingsdto";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ViewWithIdDTO extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ColumnDTO })
  @Expose({ name: "columns" })
  @Type(() => ColumnDTO)
  columns?: ColumnDTO[];

  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  @Type(() => OrderDTO)
  order?: OrderDTO;

  @SpeakeasyMetadata()
  @Expose({ name: "permissions" })
  @Type(() => PermissionsDTO)
  permissions?: PermissionsDTO;

  @SpeakeasyMetadata()
  @Expose({ name: "settings" })
  @Type(() => SettingsDTO)
  settings?: SettingsDTO;

  @SpeakeasyMetadata()
  @Expose({ name: "viewId" })
  viewId?: number;
}
