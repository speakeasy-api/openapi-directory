/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * The category associated with the accounting code.
 *
 * @remarks
 *
 */
export enum GETAccountingCodeItemWithoutSuccessTypeCategoryEnum {
  Assets = "Assets",
  Liabilities = "Liabilities",
  Equity = "Equity",
  Revenue = "Revenue",
  Expenses = "Expenses",
}

/**
 * The accounting code status.
 *
 * @remarks
 *
 */
export enum GETAccountingCodeItemWithoutSuccessTypeStatusEnum {
  Active = "Active",
  Inactive = "Inactive",
}

/**
 * Accounting code type.
 *
 * @remarks
 *
 * Note that `On-Account Receivable` is only available if you enable the Invoice Settlement feature.
 *
 */
export enum GETAccountingCodeItemWithoutSuccessTypeTypeEnum {
  AccountsReceivable = "AccountsReceivable",
  OnAccountReceivable = "On-Account Receivable",
  Cash = "Cash",
  OtherAssets = "OtherAssets",
  CustomerCashOnAccount = "CustomerCashOnAccount",
  DeferredRevenue = "DeferredRevenue",
  SalesTaxPayable = "SalesTaxPayable",
  OtherLiabilities = "OtherLiabilities",
  SalesRevenue = "SalesRevenue",
  SalesDiscounts = "SalesDiscounts",
  OtherRevenue = "OtherRevenue",
  OtherEquity = "OtherEquity",
  BadDebt = "BadDebt",
  OtherExpenses = "OtherExpenses",
}

/**
 * Container for custom fields of an Accounting Code object.
 *
 * @remarks
 *
 */
export class GETAccountingCodeItemWithoutSuccessType extends SpeakeasyBase {
  /**
   * The category associated with the accounting code.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "category" })
  category?: GETAccountingCodeItemWithoutSuccessTypeCategoryEnum;

  /**
   * The ID of the user who created the accounting code.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createdBy" })
  createdBy?: string;

  /**
   * Date and time when the accounting code was created.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdOn?: Date;

  /**
   * Name of the account in your general ledger.
   *
   * @remarks
   *
   * Field only available if you have Zuora Finance enabled.
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "glAccountName" })
  glAccountName?: string;

  /**
   * Account number in your general ledger.
   *
   * @remarks
   *
   * Field only available if you have Zuora Finance enabled.
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "glAccountNumber" })
  glAccountNumber?: string;

  /**
   * ID of the accounting code.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Name of the accounting code.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Any optional notes for the accounting code.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "notes" })
  notes?: string;

  /**
   * The accounting code status.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GETAccountingCodeItemWithoutSuccessTypeStatusEnum;

  /**
   * Accounting code type.
   *
   * @remarks
   *
   * Note that `On-Account Receivable` is only available if you enable the Invoice Settlement feature.
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: GETAccountingCodeItemWithoutSuccessTypeTypeEnum;

  /**
   * The ID of the user who last updated the accounting code.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updatedBy" })
  updatedBy?: string;

  /**
   * Date and time when the accounting code was last updated.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updatedOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedOn?: Date;
}
